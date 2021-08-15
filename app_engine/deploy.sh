#!/bin/bash
(cd svelte-typescript-app; npm run build)
./manage.py collectstatic
gcloud app deploy