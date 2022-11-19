import DiscountId from '../../discounts/domain/discountId';
import ItemId from './itemId';
import ItemPrice from './itemPrice';

export default class Item {
    readonly id: ItemId;

    private readonly _price: ItemPrice;

    private readonly _discountId: DiscountId;

    public get price(): ItemPrice {
        return this._price;
    }
    public get discountId(): DiscountId {
        return this._discountId;
    }

    constructor(params: { id: ItemId; price: ItemPrice; discountId: DiscountId }) {
        this.id = params.id;
        this._price = params.price;
        this._discountId = params.discountId;
    }
}
