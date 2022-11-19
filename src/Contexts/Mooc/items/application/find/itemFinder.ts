import { Nullable } from '../../../shared/nullable';
import Item from '../../domain/item';
import ItemId from '../../domain/itemId';
import ItemRepository from '../../domain/itemRepository';

export default class ItemFinder {
    constructor(private readonly _repository: ItemRepository) {}

    async run(id: string): Promise<Nullable<Item>> {
        const itemId = new ItemId(id);

        const item = await this._repository.search(itemId);

        if (!item) {
            throw new Error(`Item not found. Id: <${id}>`);
        }

        return item;
    }
}
