import DiscountId from './discountId';

export default class DiscountNotFoundException extends Error {
    constructor(id: DiscountId) {
        super(`Discount not found. Id: <${id.value}>`);
    }
}
