import { Nullable } from '../../shared/nullable';
import Purchase from '../domain/purchase';
import PurchaseId from '../domain/purchaseId';
import PurchaseRepository from '../domain/purchaseRepository';

export default class PurchaseRepositoryMock implements PurchaseRepository {
    private mockSave = jest.fn();

    private mockSearch = jest.fn();

    async save(purchase: Purchase): Promise<void> {
        this.mockSave(purchase);
    }

    assertSaveHasBeenCalledWith(purchase: Purchase): void {
        const { mock } = this.mockSave,
            lastSavedPurchase = mock.calls[mock.calls.length - 1][0] as Purchase;

        expect(lastSavedPurchase).toBeInstanceOf(Purchase);
        expect(lastSavedPurchase).toStrictEqual(purchase);
    }

    assertNothingSaved(): void {
        expect(this.mockSave).not.toHaveBeenCalled();
    }

    search(id: PurchaseId): Promise<Nullable<Purchase>> {
        return this.mockSearch(id);
    }

    whenSearchThenReturn(purchase: Nullable<Purchase>): void {
        this.mockSearch.mockReturnValue(purchase);
    }

    assertSearchHasBeenCalledWith(id: PurchaseId): void {
        expect(this.mockSearch).toHaveBeenCalledWith(id);
    }
}
