import { Nullable } from '../../shared/nullable';
import { Item } from './item';
import ItemId from './itemId';

export default interface ItemRepository {
    save(item: Item): Promise<void>;

    search(id: ItemId): Promise<Nullable<Item>>;
}
