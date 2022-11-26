import { Nullable } from '../../shared/domain/nullable';
import Discount from './discount';
import DiscountId from './discountId';

export default interface DiscountRepository {
    save(discount: Discount): Promise<void>;

    search(id: DiscountId): Promise<Nullable<Discount>>;
}
