import MotherCreator from '../../shared/domain/motherCreator.mother';
import PurchaseId from './purchaseId';

export default class PurchaseIdMother {
    static create(value: string) {
        return new PurchaseId(value);
    }

    static random() {
        return new PurchaseId(MotherCreator.uuid());
    }
}
