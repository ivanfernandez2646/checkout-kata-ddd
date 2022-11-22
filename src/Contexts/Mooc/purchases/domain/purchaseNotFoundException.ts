import PurchaseId from './purchaseId';

export default class PurchaseNotFoundException extends Error {
    constructor(id: PurchaseId) {
        super(`Purchase not found. Id: <${id.value}>`);
    }
}
