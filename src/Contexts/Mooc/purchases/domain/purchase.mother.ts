import Repeater from '../../discounts/domain/repeater.mother';
import ItemId from '../../items/domain/itemId';
import ItemIdMother from '../../items/domain/itemId.mother';
import MotherCreator from '../../shared/domain/motherCreator.mother';
import Purchase from './purchase';
import PurchaseDate from './purchaseDate';
import PurchaseDateMother from './purchaseDate.mother';
import PurchaseId from './purchaseId';
import PurchaseIdMother from './purchaseId.mother';

export default class PurchaseMother {
    static create(params: { id: PurchaseId; itemIds: ItemId[]; date: PurchaseDate }) {
        return new Purchase(params);
    }

    static random(overwrites?: { id?: PurchaseId; itemIds?: ItemId[]; date?: PurchaseDate }) {
        return PurchaseMother.create({
            id: overwrites?.id ? overwrites.id : PurchaseIdMother.random(),
            itemIds: overwrites?.itemIds
                ? overwrites.itemIds
                : Repeater.random(ItemIdMother.random, MotherCreator.positiveNumber({ max: 10 })),
            date: overwrites?.date ? overwrites.date : PurchaseDateMother.random(),
        });
    }
}
