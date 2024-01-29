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
import type { WorkchainDescr } from './WorkchainDescr';
import {
    WorkchainDescrFromJSON,
    WorkchainDescrFromJSONTyped,
    WorkchainDescrToJSON,
} from './WorkchainDescr';

/**
 * Workchains in the TON Blockchain
 * @export
 * @interface BlockchainConfig12
 */
export interface BlockchainConfig12 {
    /**
     * 
     * @type {Array<WorkchainDescr>}
     * @memberof BlockchainConfig12
     */
    workchains: Array<WorkchainDescr>;
}

/**
 * Check if a given object implements the BlockchainConfig12 interface.
 */
export function instanceOfBlockchainConfig12(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "workchains" in value;

    return isInstance;
}

export function BlockchainConfig12FromJSON(json: any): BlockchainConfig12 {
    return BlockchainConfig12FromJSONTyped(json, false);
}

export function BlockchainConfig12FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig12 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'workchains': ((json['workchains'] as Array<any>).map(WorkchainDescrFromJSON)),
    };
}

export function BlockchainConfig12ToJSON(value?: BlockchainConfig12 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'workchains': ((value.workchains as Array<any>).map(WorkchainDescrToJSON)),
    };
}

