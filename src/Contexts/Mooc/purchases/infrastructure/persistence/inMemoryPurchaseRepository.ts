import { Nullable } from '../../../shared/nullable';
import Purchase from '../../domain/purchase';
import PurchaseId from '../../domain/purchaseId';
import PurchaseRepository from '../../domain/purchaseRepository';

export default class InMemoryPurchaseRepository implements PurchaseRepository {
    private readonly _purchases: Purchase[];

    constructor() {
        this._purchases = [];
    }

    async save(purchase: Purchase): Promise<void> {
        return new Promise((res) => {
            this._purchases.push(purchase);
            res();
        });
    }

    async search(id: PurchaseId): Promise<Nullable<Purchase>> {
        return new Promise((res) => {
            const Purchase = this._purchases.find((d) => d.id.equalsTo(id)) || null;
            res(Purchase);
        });
    }
}
