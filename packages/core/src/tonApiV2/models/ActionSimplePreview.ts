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

import { mapValues } from '../runtime';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';

/**
 * shortly describes what this action is about.
 * @export
 * @interface ActionSimplePreview
 */
export interface ActionSimplePreview {
    /**
     * 
     * @type {string}
     * @memberof ActionSimplePreview
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ActionSimplePreview
     */
    description: string;
    /**
     * a link to an image for this particular action.
     * @type {string}
     * @memberof ActionSimplePreview
     */
    actionImage?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionSimplePreview
     */
    value?: string;
    /**
     * a link to an image that depicts this action's asset.
     * @type {string}
     * @memberof ActionSimplePreview
     */
    valueImage?: string;
    /**
     * 
     * @type {Array<AccountAddress>}
     * @memberof ActionSimplePreview
     */
    accounts: Array<AccountAddress>;
}

/**
 * Check if a given object implements the ActionSimplePreview interface.
 */
export function instanceOfActionSimplePreview(value: object): value is ActionSimplePreview {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('accounts' in value) || value['accounts'] === undefined) return false;
    return true;
}

export function ActionSimplePreviewFromJSON(json: any): ActionSimplePreview {
    return ActionSimplePreviewFromJSONTyped(json, false);
}

export function ActionSimplePreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionSimplePreview {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'actionImage': json['action_image'] == null ? undefined : json['action_image'],
        'value': json['value'] == null ? undefined : json['value'],
        'valueImage': json['value_image'] == null ? undefined : json['value_image'],
        'accounts': ((json['accounts'] as Array<any>).map(AccountAddressFromJSON)),
    };
}

export function ActionSimplePreviewToJSON(value?: ActionSimplePreview | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
        'action_image': value['actionImage'],
        'value': value['value'],
        'value_image': value['valueImage'],
        'accounts': ((value['accounts'] as Array<any>).map(AccountAddressToJSON)),
    };
}

