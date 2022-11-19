import { Nullable } from '../../../shared/nullable';
import { Item } from '../../domain/item';
import ItemId from '../../domain/itemId';
import ItemRepository from '../../domain/itemRepository';

export default class InMemoryItemRepository implements ItemRepository {
    private readonly _items: Item[];

    constructor() {
        this._items = [];
    }

    async save(item: Item): Promise<void> {
        return new Promise((res) => {
            this._items.push(item);
            res();
        });
    }

    async search(id: ItemId): Promise<Nullable<Item>> {
        return new Promise((res) => {
            const Item = this._items.find((d) => d.id.equalsTo(id)) || null;
            res(Item);
        });
    }
}
