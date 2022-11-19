import PurchaseMother from '../../domain/purchase.mother';
import PurchaseRepositoryMock from '../../__mocks__/purchaseRepository.mock';
import PurchaseFinder from './purchaseFinder';

let repository: PurchaseRepositoryMock;
let finder: PurchaseFinder;

beforeAll(() => {
    repository = new PurchaseRepositoryMock();
    finder = new PurchaseFinder(repository);
});

describe('PurchaseCreator', () => {
    it('should throw an error when the purchase does not exist', async () => {
        const purchase = PurchaseMother.random();

        repository.whenSearchThenReturn(null);

        await expect(finder.run(purchase.id.value)).rejects.toThrowError();

        repository.assertSearchHasBeenCalledWith(purchase.id);
    });

    it('should return a purchase if it is found by id', async () => {
        const purchase = PurchaseMother.random();

        repository.whenSearchThenReturn(purchase);

        await finder.run(purchase.id.value);

        repository.assertSearchHasBeenCalledWith(purchase.id);
    });
});
