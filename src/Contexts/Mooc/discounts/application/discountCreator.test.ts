import DiscountMother from '../domain/discount.mother';
import DiscountRepositoryMock from '../__mocks__/discountRespository.mock';
import DiscountCreator from './discountCreator';

let repository: DiscountRepositoryMock;
let creator: DiscountCreator;

beforeAll(() => {
    repository = new DiscountRepositoryMock();
    creator = new DiscountCreator(repository);
});

describe('DiscountCreator', () => {
    it('should create a valid discount', async () => {
        const discount = DiscountMother.random();

        await creator.run({ id: discount.id.value, threshold: discount.threshold.value, amount: discount.amount.value });

        repository.assertSaveHasBeenCalledWith(discount);
    });
});
