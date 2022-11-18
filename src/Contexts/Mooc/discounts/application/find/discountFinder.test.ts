import DiscountMother from '../../domain/discount.mother';
import DiscountRepositoryMock from '../../__mocks__/discountRespository.mock';
import DiscountFinder from './discountFinder';

let repository: DiscountRepositoryMock;
let finder: DiscountFinder;

beforeAll(() => {
    repository = new DiscountRepositoryMock();
    finder = new DiscountFinder(repository);
});

describe('DiscountCreator', () => {
    it('should throw an error when the discount does not exist', async () => {
        const discount = DiscountMother.random();

        repository.whenSearchThenReturn(null);

        await expect(finder.run(discount.id.value)).rejects.toThrowError();

        repository.assertSearchHasBeenCalledWith(discount.id);
    });

    it('should return a discount if it is found by id', async () => {
        const discount = DiscountMother.random();

        repository.whenSearchThenReturn(discount);

        await finder.run(discount.id.value);

        repository.assertSearchHasBeenCalledWith(discount.id);
    });
});
