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
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import type { JettonPreview } from './JettonPreview';
import {
    JettonPreviewFromJSON,
    JettonPreviewFromJSONTyped,
    JettonPreviewToJSON,
} from './JettonPreview';

/**
 * 
 * @export
 * @interface ValueFlowJettonsInner
 */
export interface ValueFlowJettonsInner {
    /**
     * 
     * @type {AccountAddress}
     * @memberof ValueFlowJettonsInner
     */
    account: AccountAddress;
    /**
     * 
     * @type {JettonPreview}
     * @memberof ValueFlowJettonsInner
     */
    jetton: JettonPreview;
    /**
     * 
     * @type {number}
     * @memberof ValueFlowJettonsInner
     */
    quantity: number;
}

/**
 * Check if a given object implements the ValueFlowJettonsInner interface.
 */
export function instanceOfValueFlowJettonsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "account" in value;
    isInstance = isInstance && "jetton" in value;
    isInstance = isInstance && "quantity" in value;

    return isInstance;
}

export function ValueFlowJettonsInnerFromJSON(json: any): ValueFlowJettonsInner {
    return ValueFlowJettonsInnerFromJSONTyped(json, false);
}

export function ValueFlowJettonsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValueFlowJettonsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': AccountAddressFromJSON(json['account']),
        'jetton': JettonPreviewFromJSON(json['jetton']),
        'quantity': json['quantity'],
    };
}

export function ValueFlowJettonsInnerToJSON(value?: ValueFlowJettonsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': AccountAddressToJSON(value.account),
        'jetton': JettonPreviewToJSON(value.jetton),
        'quantity': value.quantity,
    };
}

