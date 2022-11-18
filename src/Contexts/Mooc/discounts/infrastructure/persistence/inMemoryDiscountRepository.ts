import { Nullable } from '../../../shared/nullable';
import Discount from '../../domain/discount';
import discount from '../../domain/discount';
import discountId from '../../domain/discountId';
import DiscountRepository from '../../domain/discountRepository';

export default class InMemoryDiscountRepository implements DiscountRepository {
    private readonly _discounts: Discount[];

    constructor() {
        this._discounts = [];
    }

    save(discount: discount): Promise<void> {
        return new Promise((res) => {
            this._discounts.push(discount);
            res();
        });
    }

    async search(id: discountId): Promise<Nullable<discount>> {
        return new Promise((res) => {
            const discount = this._discounts.find((d) => d.id.equalsTo(id)) || null;
            res(discount);
        });
    }
}
