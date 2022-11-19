import PurchaseMother from '../../domain/purchase.mother';
import PurchaseRepositoryMock from '../../__mocks__/purchaseRepository.mock';
import PurchaseCreator from './purchaseCreator';

let repository: PurchaseRepositoryMock;
let creator: PurchaseCreator;

beforeAll(() => {
    repository = new PurchaseRepositoryMock();
    creator = new PurchaseCreator(repository);
});

describe('PurchaseCreator', () => {
    it('should create a valid purchase', async () => {
        const purchase = PurchaseMother.random();

        await creator.run({ id: purchase.id.value, itemIds: purchase.itemIds?.map((i) => i.value) });

        repository.assertSaveHasBeenCalledWith(purchase);
    });
});
