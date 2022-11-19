import ItemId from '../../../items/domain/itemId';
import Purchase from '../../domain/purchase';
import PurchaseId from '../../domain/purchaseId';
import PurchaseRepository from '../../domain/purchaseRepository';

export default class PurchaseCreator {
    constructor(private readonly _repository: PurchaseRepository) {}

    async run(params: { id: string; itemIds: string[] }): Promise<void> {
        const id = new PurchaseId(params.id),
            itemIds = params.itemIds?.map((i) => new ItemId(i)),
            purchase = new Purchase({ id, itemIds });

        if (await this._repository.search(id)) {
            throw new Error(`Purchase already exists: Id <${id}>`);
        }

        return this._repository.save(purchase);
    }

    // TODO: ensure item integrity (check if each item exists)
}
