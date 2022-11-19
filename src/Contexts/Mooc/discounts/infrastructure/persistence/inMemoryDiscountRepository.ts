import { Nullable } from '../../../shared/nullable';
import Discount from '../../domain/discount';
import DiscountId from '../../domain/discountId';
import DiscountRepository from '../../domain/discountRepository';

export default class InMemoryDiscountRepository implements DiscountRepository {
    private readonly _discounts: Discount[];

    constructor() {
        this._discounts = [];
    }

    async save(discount: Discount): Promise<void> {
        return new Promise((res) => {
            this._discounts.push(discount);
            res();
        });
    }

    async search(id: DiscountId): Promise<Nullable<Discount>> {
        return new Promise((res) => {
            const discount = this._discounts.find((d) => d.id.equalsTo(id)) || null;
            res(discount);
        });
    }
}
