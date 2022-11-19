import Uuid from '../../shared/domain/uuid';

export default class DiscountId extends Uuid {
    constructor(value: string) {
        super(value);
    }
}
