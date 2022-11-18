import MotherCreator from '../../shared/domain/motherCreator.mother';
import Discount from './discount';
import DiscountMother from './discount.mother';
import Discounts from './discounts';
import Repeater from './repeater.mother';

export default class DiscountsMother {
    static create(discounts: Discount[]) {
        return new Discounts(discounts);
    }

    static random(nDiscounts?: number) {
        const nItems = nDiscounts || MotherCreator.positiveNumber(5),
            discounts = Repeater.random(() => DiscountMother.random(), nItems);

        return DiscountsMother.create(discounts);
    }
}
