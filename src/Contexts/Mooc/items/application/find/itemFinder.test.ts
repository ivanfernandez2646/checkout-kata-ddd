import ItemMother from '../../domain/item.mother';
import ItemRepositoryMock from '../../__mocks__/itemRepository.mock';
import ItemFinder from './itemFinder';

let repository: ItemRepositoryMock;
let finder: ItemFinder;

beforeAll(() => {
    repository = new ItemRepositoryMock();
    finder = new ItemFinder(repository);
});

describe('ItemFinder', () => {
    it('should throw an error when the item does not exist', async () => {
        const item = ItemMother.random();

        repository.whenSearchThenReturn(null);

        await expect(finder.run(item.id.value)).rejects.toThrowError();

        repository.assertSearchHasBeenCalledWith(item.id);
    });

    it('should return a item if it is found by id', async () => {
        const item = ItemMother.random();

        repository.whenSearchThenReturn(item);

        await finder.run(item.id.value);

        repository.assertSearchHasBeenCalledWith(item.id);
    });
});
