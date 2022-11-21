import { Nullable } from '../../../shared/nullable';
import { ItemPrimitives } from '../../domain/item';
import ItemId from '../../domain/itemId';
import ItemNotFoundException from '../../domain/itemNotFoundException';
import ItemRepository from '../../domain/itemRepository';

export default class ItemFinder {
    constructor(private readonly _repository: ItemRepository) {}

    async run(id: string): Promise<Nullable<ItemPrimitives>> {
        const itemId = new ItemId(id);

        const item = await this._repository.search(itemId);

        if (!item) {
            throw new ItemNotFoundException(itemId);
        }

        return item.toPrimitives();
    }
}
