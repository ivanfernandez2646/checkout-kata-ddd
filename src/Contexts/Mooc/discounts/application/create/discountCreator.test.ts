import DiscountMother from '../../domain/discount.mother';
import DiscountExistsException from '../../domain/discountExistsException';
import DiscountRepositoryMock from '../../__mocks__/discountRespository.mock';
import DiscountCreator from './discountCreator';

let repository: DiscountRepositoryMock;
let creator: DiscountCreator;

beforeAll(() => {
    repository = new DiscountRepositoryMock();
    creator = new DiscountCreator(repository);
});

beforeEach(() => {
    jest.clearAllMocks();
});

describe('DiscountCreator', () => {
    it('should throw an error when the discount already exists', async () => {
        const discount = DiscountMother.random();

        repository.whenSearchThenReturn(discount);

        await expect(
            creator.run({ id: discount.id.value, threshold: discount.threshold.value, amount: discount.amount.value })
        ).rejects.toThrow(DiscountExistsException);

        repository.assertNothingSaved();
    });

    it('should create a valid discount', async () => {
        const discount = DiscountMother.random();

        repository.whenSearchThenReturn(null);

        await creator.run({ id: discount.id.value, threshold: discount.threshold.value, amount: discount.amount.value });

        repository.assertSaveHasBeenCalledWith(discount);
    });
});
