import Discount from './discount';

export default class Discounts {
    private readonly _discounts: Discount[];

    constructor(discounts: Discount[]) {
        this._discounts = discounts;
    }

    public get discounts(): Discount[] {
        return this._discounts.map((d) => Object.assign({}, d));
    }
}
