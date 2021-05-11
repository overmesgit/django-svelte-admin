import logging
from datetime import datetime, timezone, timedelta
from typing import Optional

from google.cloud.logging_v2 import Client, DESCENDING
from googleapiclient import discovery
from googleapiclient.errors import HttpError

logger = logging.getLogger()


class DatabaseController:
    NEVER = 'NEVER'
    ALWAYS = 'ALWAYS'

    def __init__(self):
        self.project = 'kuroneko-310814'
        self.instance = 'kuroneko'
        self.service = discovery.build('sqladmin', 'v1beta4')

    def turn_db_on(self):
        logger.info('Turn database on')
        try:
            self._patch(self.ALWAYS)
        except HttpError as e:
            logger.info(f'TurnDbOffError: {e}')

    def turn_db_off(self):
        logger.info('Turn database off')
        try:
            self._patch(self.NEVER)
        except HttpError as e:
            logger.info(f'TurnDbOffError: {e}')

    def _patch(self, activation_policy):
        request = self.service.instances().get(project=self.project, instance=self.instance)
        response = request.execute()

        request_body = {
            "settings": {
                "settingsVersion": response["settings"]["settingsVersion"],
                "activationPolicy": activation_policy
            }
        }

        request = self.service.instances().patch(
            project=self.project,
            instance=self.instance,
            body=request_body)
        response = request.execute()
        logger.info(f'PatchResponse {response=}')

    def check_db_log(self) -> (Optional[datetime], Optional[int]):
        client = Client(project=self.project)
        log_filter = 'resource.type="cloudsql_database" "connection authorized: user=data"'
        page_size = 10
        query = client.list_entries(filter_=log_filter, order_by=DESCENDING, page_size=page_size)
        last_login = None
        for entry in query:
            last_login = entry.timestamp
            break

        current_delta = None
        if last_login:
            current_delta = (datetime.now(timezone.utc) - last_login).seconds
            logger.info(f'{last_login=} {current_delta=}.')
        if not last_login or (current_delta and current_delta > 3600):
            logger.info(f'Turn database off.')
            self.turn_db_off()

        return last_login, current_delta
