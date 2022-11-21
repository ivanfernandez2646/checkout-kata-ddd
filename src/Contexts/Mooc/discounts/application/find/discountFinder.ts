import DiscountId from '../../domain/discountId';
import DiscountNotFoundException from '../../domain/discountNotFoundException';
import DiscountRepository from '../../domain/discountRepository';

export default class DiscountFinder {
    constructor(private readonly _repository: DiscountRepository) {}

    async run(id: string) {
        const discountId = new DiscountId(id);

        const discount = await this._repository.search(discountId);

        if (!discount) {
            throw new DiscountNotFoundException(discountId);
        }

        return discount.toPrimitives();
    }
}
