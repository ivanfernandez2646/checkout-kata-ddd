import DiscountId from '../../discounts/domain/discountId';
import DiscountIdMother from '../../discounts/domain/discountId.mother';
import Item from './item';
import ItemId from './itemId';
import ItemIdMother from './itemId.mother';
import ItemPrice from './itemPrice';
import ItemPriceMother from './itemPrice.mother';

export default class ItemMother {
    static create(params: { id: ItemId; price: ItemPrice; discountId: DiscountId }) {
        return new Item(params);
    }

    static random(overwrites?: { id?: ItemId; price?: ItemPrice; discountId?: DiscountId }) {
        return new Item({
            id: overwrites?.id ? overwrites.id : ItemIdMother.random(),
            price: overwrites?.price ? overwrites.price : ItemPriceMother.random(),
            discountId: overwrites?.discountId ? overwrites.discountId : DiscountIdMother.random(),
        });
    }
}
