import Discount from '../domain/discount';
import DiscountAmount from '../domain/discountAmount';
import DiscountId from '../domain/discountId';
import DiscountRepository from '../domain/discountRepository';
import DiscountThreshold from '../domain/discountThreshold';

export default class DiscountCreator {
    constructor(private readonly _repository: DiscountRepository) {}

    async run(params: { id: string; threshold: number; amount: number }): Promise<void> {
        const id = new DiscountId(params.id),
            threshold = new DiscountThreshold(params.threshold),
            amount = new DiscountAmount(params.amount),
            discount = new Discount({ id: id, threshold: threshold, amount: amount });

        if (await this._repository.search(id)) {
            throw new Error(`Discount already exists: Id <${id}>`);
        }

        return this._repository.save(discount);
    }
}
