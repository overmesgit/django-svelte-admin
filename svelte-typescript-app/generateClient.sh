#!/bin/bash
./../manage.py generateschema --file ../schema.json --format openapi-json
./node_modules/.bin/openapi-generator-cli generate -i ../schema.json -g typescript -o src/client-ts/
echo 'export interface URI extends String {}' > src/client-ts/models/URI.ts
cd src/client-ts
npm install
cd ../..