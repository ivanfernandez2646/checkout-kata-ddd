import { AggregateRoot } from '../../shared/domain/aggregateRoot';
import DiscountAmount from './discountAmount';
import DiscountCreatedDomainEvent from './discountCreatedDomainEvent';
import DiscountId from './discountId';
import DiscountThreshold from './discountThreshold';

export type DiscountPrimitives = {
    id: string;
    threshold: number;
    amount: number;
};

export default class Discount extends AggregateRoot {
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
        super();

        this.id = params.id;
        this._threshold = params.threshold;
        this._amount = params.amount;
    }

    toPrimitives(): DiscountPrimitives {
        return { id: this.id.value, threshold: this._threshold.value, amount: this._amount.value };
    }

    static create(params: { id: DiscountId; threshold: DiscountThreshold; amount: DiscountAmount }): Discount {
        const discount = new Discount(params);
        discount.record(new DiscountCreatedDomainEvent({ aggregateId: discount.id.value, discount: discount.toPrimitives() }));

        return discount;
    }
}
