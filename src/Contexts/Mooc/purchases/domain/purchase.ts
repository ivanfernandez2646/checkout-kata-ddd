import ItemId from '../../items/domain/itemId';
import PurchaseDate from './purchaseDate';
import PurchaseId from './purchaseId';

export default class Purchase {
    readonly id: PurchaseId;

    // TODO: encapsulate more
    private readonly _itemIds: ItemId[];

    private readonly _date: PurchaseDate;

    public get itemIds(): ItemId[] {
        return this._itemIds;
    }

    public get date(): PurchaseDate {
        return this._date;
    }

    constructor(params: { id: PurchaseId; itemIds: ItemId[] }) {
        this.id = params.id;
        this._itemIds = params.itemIds;
        this._date = new PurchaseDate(Date.now());
    }
}
