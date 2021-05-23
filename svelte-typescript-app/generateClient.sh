#!/bin/bash
./../manage.py generateschema --file ../schema.json --format openapi-json
./node_modules/.bin/openapi-generator-cli generate -i ../schema.json -g typescript -o src/client-ts/ -t out