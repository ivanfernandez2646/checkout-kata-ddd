import DiscountId from '../../discounts/domain/discountId';
import { Nullable } from '../../shared/domain/nullable';
import ItemId from './itemId';
import ItemPrice from './itemPrice';

export type ItemPrimitives = {
    id: string;
    price: number;
    discountId: Nullable<string>;
};
export default class Item {
    readonly id: ItemId;

    private readonly _price: ItemPrice;

    private readonly _discountId: Nullable<DiscountId>;

    public get price(): ItemPrice {
        return this._price;
    }
    public get discountId(): Nullable<DiscountId> {
        return this._discountId;
    }

    constructor(params: { id: ItemId; price: ItemPrice; discountId: Nullable<DiscountId> }) {
        this.id = params.id;
        this._price = params.price;
        this._discountId = params.discountId;
    }

    toPrimitives(): ItemPrimitives {
        return { id: this.id.value, price: this.price.value, discountId: this.discountId?.value || null };
    }
}
