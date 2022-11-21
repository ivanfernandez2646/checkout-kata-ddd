import ItemId from '../../items/domain/itemId';
import PurchaseDate from './purchaseDate';
import PurchaseId from './purchaseId';

export type PurchasePrimitives = { id: string; itemIds: string[]; date: Date };

export default class Purchase {
    readonly id: PurchaseId;

    // TODO: encapsulate more
    private readonly _itemIds: ItemId[];

    private readonly _date: PurchaseDate;

    public get itemIds(): ItemId[] {
        return this._itemIds.map((i) => Object.assign({}, i));
    }

    public get date(): PurchaseDate {
        return this._date;
    }

    constructor(params: { id: PurchaseId; itemIds: ItemId[]; date: PurchaseDate }) {
        this.id = params.id;
        this._itemIds = params.itemIds || [];
        this._date = params.date;
    }

    toPrimitives(): PurchasePrimitives {
        return { id: this.id.value, itemIds: this.itemIds.map((i) => i.value), date: new Date(this.date.value) };
    }
}
