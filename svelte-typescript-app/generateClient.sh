#!/bin/bash
./../manage.py generateschema --file ../schema.json --format openapi-json
./node_modules/.bin/openapi-generator-cli generate -i ../schema.json -g typescript-fetch -o src/client-ts/
./node_modules/.bin/openapi-generator-cli generate -i ../schema.json -g typescript-fetch -o src/client-ts/ --global-property apis,supportingFiles,models="Author:Book:Group:User" -t out --additional-properties=useSingleRequestParameter=false