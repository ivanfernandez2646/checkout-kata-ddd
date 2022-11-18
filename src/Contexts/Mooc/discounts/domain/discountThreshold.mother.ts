import MotherCreator from '../../shared/domain/motherCreator.mother';
import DiscountThreshold from './discountThreshold';

export default class DiscountThresholdMother {
    static create(value: number) {
        return new DiscountThreshold(value);
    }

    static random() {
        return new DiscountThreshold(MotherCreator.positiveNumber());
    }
}
