import DiscountId from '../../../discounts/domain/discountId';
import Item from '../../domain/item';
import ItemId from '../../domain/itemId';
import ItemPrice from '../../domain/itemPrice';
import ItemRepository from '../../domain/itemRepository';

export default class ItemCreator {
    constructor(private readonly _repository: ItemRepository) {}

    async run(params: { id: string; price: number; discountId: string }): Promise<void> {
        const id = new ItemId(params.id),
            price = new ItemPrice(params.price),
            discountId = new DiscountId(params.discountId),
            item = new Item({ id, price, discountId });

        if (await this._repository.search(id)) {
            throw new Error(`Item already exists: Id <${id}>`);
        }

        return this._repository.save(item);
    }

    // TODO: ensure item integrity (check if discounts exists)
}