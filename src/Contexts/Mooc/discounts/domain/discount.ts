import DiscountAmount from './discountAmount';
import DiscountId from './discountId';
import DiscountThreshold from './discountThreshold';

export default class Discount {
    readonly id: DiscountId;

    private readonly _threshold: DiscountThreshold;

    private readonly _amount: DiscountAmount;

    public get threshold(): DiscountThreshold {
        return this._threshold;
    }

    public get amount(): DiscountAmount {
        return this._amount;
    }

    constructor(params: { id: DiscountId; threshold: DiscountThreshold; amount: DiscountAmount }) {
        this.id = params.id;
        this._threshold = params.threshold;
        this._amount = params.amount;
    }
}
