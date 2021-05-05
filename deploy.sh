#!/bin/bash
./manage.py collectstatic
gcloud app deploy