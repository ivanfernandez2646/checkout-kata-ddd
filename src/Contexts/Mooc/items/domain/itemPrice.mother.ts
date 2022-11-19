import MotherCreator from '../../shared/domain/motherCreator.mother';
import ItemPrice from './itemPrice';

export default class ItemPriceMother {
    static create(value: number) {
        return new ItemPrice(value);
    }

    static random() {
        return new ItemPrice(MotherCreator.positiveNumber({ precision: 0.01 }));
    }
}
