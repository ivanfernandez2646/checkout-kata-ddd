import Uuid from '../../shared/domain/uuid';

export default class PurchaseId extends Uuid {
    constructor(value: string) {
        super(value);
    }
}
