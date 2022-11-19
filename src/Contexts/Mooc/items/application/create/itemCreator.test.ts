import ItemMother from '../../domain/item.mother';
import ItemRepositoryMock from '../../__mocks__/itemRepository.mock';
import ItemCreator from './itemCreator';

let repository: ItemRepositoryMock;
let creator: ItemCreator;

beforeAll(() => {
    repository = new ItemRepositoryMock();
    creator = new ItemCreator(repository);
});

describe('ItemCreator', () => {
    it('should create a valid item', async () => {
        const item = ItemMother.random();

        await creator.run({ id: item.id.value, price: item.price.value, discountId: item.discountId.value });

        repository.assertSaveHasBeenCalledWith(item);
    });
});
