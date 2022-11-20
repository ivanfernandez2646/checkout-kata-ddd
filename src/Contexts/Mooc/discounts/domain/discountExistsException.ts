export default class DiscountExistsError extends Error {
    constructor(id: string) {
        super(`Discount already exists: Id <${id}>`);
    }
}
