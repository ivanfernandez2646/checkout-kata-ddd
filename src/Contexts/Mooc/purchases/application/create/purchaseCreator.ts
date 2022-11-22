import ItemId from '../../../items/domain/itemId';
import Purchase from '../../domain/purchase';
import PurchaseDate from '../../domain/purchaseDate';
import PurchaseExistsException from '../../domain/purchaseExistsException';
import PurchaseId from '../../domain/purchaseId';
import PurchaseRepository from '../../domain/purchaseRepository';

export default class PurchaseCreator {
    constructor(private readonly _repository: PurchaseRepository) {}

    async run(params: { id: string; itemIds: string[]; date?: string | number | Date }): Promise<void> {
        const id = new PurchaseId(params.id),
            itemIds = params.itemIds?.map((i) => new ItemId(i)),
            date = new PurchaseDate(params?.date),
            purchase = new Purchase({ id, itemIds, date });

        if (await this._repository.search(id)) {
            throw new PurchaseExistsException(id);
        }

        return this._repository.save(purchase);
    }

    // TODO: ensure item integrity (check if each item exists)
}
