import MotherCreator from '../../shared/domain/motherCreator.mother';
import DiscountAmount from './discountAmount';

export default class DiscountAmountMother {
    static create(value: number) {
        return new DiscountAmount(value);
    }

    static random() {
        return new DiscountAmount(MotherCreator.positiveNumber());
    }
}
