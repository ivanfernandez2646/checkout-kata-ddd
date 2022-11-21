import MotherCreator from '../../shared/domain/motherCreator.mother';
import PurchaseDate from './purchaseDate';

export default class PurchaseDateMother {
    static create(value: string | number | Date) {
        return new PurchaseDate(value);
    }

    static random() {
        return new PurchaseDate(MotherCreator.recentDate());
    }

    static current() {
        return new PurchaseDate(Date.now());
    }
}
