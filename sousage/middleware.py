import logging

from django.http import HttpResponse, HttpRequest
from django.db import connection, OperationalError
from django.views.generic import View

from sousage.database_control import DatabaseController

logger = logging.getLogger()


class CheckDbActivityView(View):
    def get(self, request):
        last_login, timedelta = DatabaseController().check_db_log()
        return HttpResponse(f'Check database. Last login to db {timedelta.seconds} seconds before '
                            f'at {last_login.isoformat()}.')


def db_check_middleware(get_response):
    def middleware(request: HttpRequest):
        response = get_response(request)
        # TODO: do with reverse
        if 'tasks/activity/' in request.path:
            logger.info('Skip db check.')
            return response

        try:
            connection.cursor()
        except OperationalError as e:
            DatabaseController().turn_db_on()
            return HttpResponse(
                f'Response code {response.status_code}. Db error {e}.'
                f'Database is turned off. Starting database. Please wait few minutes.')
        else:
            return response

    return middleware
