import ItemId from './itemId';

export default class ItemExistsException extends Error {
    constructor(id: ItemId) {
        super(`Item already exists: Id <${id.value}>`);
    }
}
