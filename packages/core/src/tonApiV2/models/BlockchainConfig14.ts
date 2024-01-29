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
/**
 * The reward in nanoTons for block creation in the TON blockchain.
 * @export
 * @interface BlockchainConfig14
 */
export interface BlockchainConfig14 {
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig14
     */
    masterchainBlockFee: number;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig14
     */
    basechainBlockFee: number;
}

/**
 * Check if a given object implements the BlockchainConfig14 interface.
 */
export function instanceOfBlockchainConfig14(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "masterchainBlockFee" in value;
    isInstance = isInstance && "basechainBlockFee" in value;

    return isInstance;
}

export function BlockchainConfig14FromJSON(json: any): BlockchainConfig14 {
    return BlockchainConfig14FromJSONTyped(json, false);
}

export function BlockchainConfig14FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig14 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'masterchainBlockFee': json['masterchain_block_fee'],
        'basechainBlockFee': json['basechain_block_fee'],
    };
}

export function BlockchainConfig14ToJSON(value?: BlockchainConfig14 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'masterchain_block_fee': value.masterchainBlockFee,
        'basechain_block_fee': value.basechainBlockFee,
    };
}

