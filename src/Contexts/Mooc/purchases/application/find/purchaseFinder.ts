import { Nullable } from '../../../shared/nullable';
import Purchase from '../../domain/purchase';
import PurchaseId from '../../domain/purchaseId';
import PurchaseRepository from '../../domain/purchaseRepository';

export default class PurchaseFinder {
    constructor(private readonly _repository: PurchaseRepository) {}

    async run(id: string): Promise<Nullable<Purchase>> {
        const purchaseId = new PurchaseId(id);

        const purchase = await this._repository.search(purchaseId);

        if (!purchase) {
            throw new Error(`Purchase not found. Id: <${id}>`);
        }

        return purchase;
    }
}
