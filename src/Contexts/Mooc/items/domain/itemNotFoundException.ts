import ItemId from './itemId';

export default class ItemNotFoundException extends Error {
    constructor(id: ItemId) {
        super(`Item not found. Id: <${id.value}>`);
    }
}
