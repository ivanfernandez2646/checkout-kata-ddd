import DiscountId from './discountId';

export default class DiscountExistsException extends Error {
    constructor(id: DiscountId) {
        super(`Discount already exists: Id <${id.value}>`);
    }
}
