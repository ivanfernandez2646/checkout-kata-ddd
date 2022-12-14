import { Nullable } from '../../shared/domain/nullable';
import Purchase from './purchase';
import PurchaseId from './purchaseId';

export default interface PurchaseRepository {
    save(purchase: Purchase): Promise<void>;

    search(id: PurchaseId): Promise<Nullable<Purchase>>;
}
