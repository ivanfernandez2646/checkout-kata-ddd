import MotherCreator from '../../shared/domain/motherCreator.mother';
import DiscountId from './discountId';

export default class DiscountIdMother {
    static create(value: string) {
        return new DiscountId(value);
    }

    static random() {
        return new DiscountId(MotherCreator.uuid());
    }
}
