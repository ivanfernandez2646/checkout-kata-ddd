import Repeater from '../../discounts/domain/repeater.mother';
import ItemId from '../../items/domain/itemId';
import ItemIdMother from '../../items/domain/itemId.mother';
import MotherCreator from '../../shared/domain/motherCreator.mother';
import Purchase from './purchase';
import PurchaseId from './purchaseId';
import PurchaseIdMother from './purchaseId.mother';

export default class PurchaseMother {
    static create(params: { id: PurchaseId; itemIds: ItemId[] }) {
        return new Purchase(params);
    }

    static random(overwrites?: { id?: PurchaseId; itemIds?: ItemId[] }) {
        return PurchaseMother.create({
            id: overwrites?.id ? overwrites.id : PurchaseIdMother.random(),
            itemIds: Repeater.random(ItemIdMother.random, MotherCreator.positiveNumber({ max: 10 })),
        });
    }
}
