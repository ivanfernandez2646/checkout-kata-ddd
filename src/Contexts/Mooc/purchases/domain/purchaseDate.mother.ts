import PurchaseDate from './purchaseDate';

export default class PurchaseDateMother {
    static create() {
        return new PurchaseDate(Date.now());
    }
}
