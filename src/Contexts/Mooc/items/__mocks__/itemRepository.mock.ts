import { Nullable } from '../../shared/nullable';
import Item from '../domain/item';
import ItemId from '../domain/itemId';
import ItemRepository from '../domain/itemRepository';

export default class ItemRepositoryMock implements ItemRepository {
    private mockSave = jest.fn();

    private mockSearch = jest.fn();

    async save(item: Item): Promise<void> {
        this.mockSave(item);
    }

    assertSaveHasBeenCalledWith(item: Item): void {
        const { mock } = this.mockSave,
            lastSavedItem = mock.calls[mock.calls.length - 1][0] as Item;

        expect(lastSavedItem).toBeInstanceOf(Item);
        expect(lastSavedItem).toStrictEqual(item);
    }

    assertNothingSaved(): void {
        expect(this.mockSave).not.toHaveBeenCalled();
    }

    search(id: ItemId): Promise<Nullable<Item>> {
        return this.mockSearch(id);
    }

    whenSearchThenReturn(item: Nullable<Item>): void {
        this.mockSearch.mockReturnValue(item);
    }

    assertSearchHasBeenCalledWith(id: ItemId): void {
        expect(this.mockSearch).toHaveBeenCalledWith(id);
    }
}
