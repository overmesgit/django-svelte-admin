/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Group } from './Group';
import { URI } from './URI';
import { HttpFile } from '../http/http';

export class InlineResponse2001 {
    'count'?: number;
    'next'?: URI;
    'previous'?: URI;
    'results'?: Array<Group>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "URI",
            "format": "uri"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "URI",
            "format": "uri"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Group>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2001.attributeTypeMap;
    }
    
    public constructor() {
    }
}

