import { Nullable } from '../../shared/nullable';
import Discount from '../domain/discount';
import DiscountId from '../domain/discountId';
import DiscountRepository from '../domain/discountRepository';

export default class DiscountRepositoryMock implements DiscountRepository {
    private mockSave = jest.fn();

    private mockSearch = jest.fn();

    async save(discount: Discount): Promise<void> {
        this.mockSave(discount);
    }

    assertSaveHasBeenCalledWith(discount: Discount): void {
        const { mock } = this.mockSave,
            lastSavedDiscount = mock.calls[mock.calls.length - 1][0] as Discount;

        expect(lastSavedDiscount).toBeInstanceOf(Discount);
        expect(lastSavedDiscount).toStrictEqual(discount);
    }

    assertNothingSaved(): void {
        expect(this.mockSave).not.toHaveBeenCalled();
    }

    search(id: DiscountId): Promise<Nullable<Discount>> {
        return this.mockSearch(id);
    }

    whenSearchThenReturn(discount: Nullable<Discount>): void {
        this.mockSearch.mockReturnValue(discount);
    }

    assertSearchHasBeenCalledWith(id: DiscountId): void {
        expect(this.mockSearch).toHaveBeenCalledWith(id);
    }
}
