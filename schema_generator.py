from rest_framework.schemas.openapi import AutoSchema


class SchemaGenerator(AutoSchema):
    def get_responses(self, path, method):
        res = super().get_responses(path, method)

        if method == 'POST':
            serializer = self.get_serializer(path, method)
            item_schema = self._get_reference(serializer)
            item_schema['$ref'] = f'{item_schema["$ref"]}Error'
            res['400'] = {
                'content': {
                    ct: {'schema': item_schema}
                    for ct in self.response_media_types
                },
                'description': ''
            }
        return res

    def get_components(self, path, method):
        res = super().get_components(path, method)
        if method == 'POST':
            error_schema = {}
            for obj, schema in res.items():
                err_properties = {}
                for prop in schema['properties']:
                    err_properties[prop] = {
                        "type": "array",
                        "items": {
                            "type": "string"
                        },
                    }
                error_schema[f'{obj}Error'] = {
                    'type': 'object',
                    'properties': err_properties
                }
            res |= error_schema
        return res
