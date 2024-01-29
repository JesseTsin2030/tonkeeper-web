/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressParse200ResponseBounceable } from './AddressParse200ResponseBounceable';
import {
    AddressParse200ResponseBounceableFromJSON,
    AddressParse200ResponseBounceableFromJSONTyped,
    AddressParse200ResponseBounceableToJSON,
} from './AddressParse200ResponseBounceable';

/**
 * 
 * @export
 * @interface AddressParse200Response
 */
export interface AddressParse200Response {
    /**
     * 
     * @type {string}
     * @memberof AddressParse200Response
     */
    rawForm: string;
    /**
     * 
     * @type {AddressParse200ResponseBounceable}
     * @memberof AddressParse200Response
     */
    bounceable: AddressParse200ResponseBounceable;
    /**
     * 
     * @type {AddressParse200ResponseBounceable}
     * @memberof AddressParse200Response
     */
    nonBounceable: AddressParse200ResponseBounceable;
    /**
     * 
     * @type {string}
     * @memberof AddressParse200Response
     */
    givenType: string;
    /**
     * 
     * @type {boolean}
     * @memberof AddressParse200Response
     */
    testOnly: boolean;
}

/**
 * Check if a given object implements the AddressParse200Response interface.
 */
export function instanceOfAddressParse200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rawForm" in value;
    isInstance = isInstance && "bounceable" in value;
    isInstance = isInstance && "nonBounceable" in value;
    isInstance = isInstance && "givenType" in value;
    isInstance = isInstance && "testOnly" in value;

    return isInstance;
}

export function AddressParse200ResponseFromJSON(json: any): AddressParse200Response {
    return AddressParse200ResponseFromJSONTyped(json, false);
}

export function AddressParse200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressParse200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rawForm': json['raw_form'],
        'bounceable': AddressParse200ResponseBounceableFromJSON(json['bounceable']),
        'nonBounceable': AddressParse200ResponseBounceableFromJSON(json['non_bounceable']),
        'givenType': json['given_type'],
        'testOnly': json['test_only'],
    };
}

export function AddressParse200ResponseToJSON(value?: AddressParse200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'raw_form': value.rawForm,
        'bounceable': AddressParse200ResponseBounceableToJSON(value.bounceable),
        'non_bounceable': AddressParse200ResponseBounceableToJSON(value.nonBounceable),
        'given_type': value.givenType,
        'test_only': value.testOnly,
    };
}

