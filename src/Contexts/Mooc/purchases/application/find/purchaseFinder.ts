import { Nullable } from '../../../shared/domain/nullable';
import { PurchasePrimitives } from '../../domain/purchase';
import PurchaseId from '../../domain/purchaseId';
import PurchaseNotFoundException from '../../domain/purchaseNotFoundException';
import PurchaseRepository from '../../domain/purchaseRepository';

export default class PurchaseFinder {
    constructor(private readonly _repository: PurchaseRepository) {}

    async run(id: string): Promise<Nullable<PurchasePrimitives>> {
        const purchaseId = new PurchaseId(id);

        const purchase = await this._repository.search(purchaseId);

        if (!purchase) {
            throw new PurchaseNotFoundException(purchaseId);
        }

        return purchase.toPrimitives();
    }
}
