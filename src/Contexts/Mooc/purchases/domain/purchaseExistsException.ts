import PurchaseId from './purchaseId';

export default class PurchaseExistsException extends Error {
    constructor(id: PurchaseId) {
        super(`Purchase already exists: Id <${id.value}>`);
    }
}
