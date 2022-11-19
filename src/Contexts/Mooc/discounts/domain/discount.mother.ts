import Discount from './discount';
import DiscountAmount from './discountAmount';
import DiscountAmountMother from './discountAmount.mother';
import DiscountId from './discountId';
import DiscountIdMother from './discountId.mother';
import DiscountThreshold from './discountThreshold';
import DiscountThresholdMother from './discountThreshold.mother';

export default class DiscountMother {
    static create(params: { id: DiscountId; threshold: DiscountThreshold; amount: DiscountAmount }) {
        return new Discount(params);
    }

    static random(overwrites?: { id?: DiscountId; threshold?: DiscountThreshold; amount?: DiscountAmount }) {
        return new Discount({
            id: overwrites?.id ? overwrites.id : DiscountIdMother.random(),
            threshold: overwrites?.threshold ? overwrites.threshold : DiscountThresholdMother.random(),
            amount: overwrites?.amount ? overwrites.amount : DiscountAmountMother.random(),
        });
    }
}
