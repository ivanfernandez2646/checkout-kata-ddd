import EventBus from '../../../shared/domain/eventBus';
import Discount from '../../domain/discount';
import DiscountAmount from '../../domain/discountAmount';
import DiscountExistsException from '../../domain/discountExistsException';
import DiscountId from '../../domain/discountId';
import DiscountRepository from '../../domain/discountRepository';
import DiscountThreshold from '../../domain/discountThreshold';

export default class DiscountCreator {
    constructor(private _repository: DiscountRepository, private _eventBus: EventBus) {}

    async run(params: { id: string; threshold: number; amount: number }): Promise<void> {
        const id = new DiscountId(params.id),
            threshold = new DiscountThreshold(params.threshold),
            amount = new DiscountAmount(params.amount),
            discount = Discount.create({ id, threshold, amount });

        if (await this._repository.search(id)) {
            throw new DiscountExistsException(id);
        }

        await this._repository.save(discount);
        await this._eventBus.publish(discount.pullDomainEvents());
    }
}
