import DiscountId from '../../domain/discountId';
import DiscountRepository from '../../domain/discountRepository';

export default class DiscountFinder {
    constructor(private readonly _repository: DiscountRepository) {}

    async run(id: string) {
        const discountId = new DiscountId(id);

        const discount = await this._repository.search(discountId);

        if (!discount) {
            throw new Error(`Discount not found. Id: <${id}>`);
        }

        return discount;
    }
}
