import StringValueObject from '../../shared/domain/stringValueObject';

export default class DiscountId extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}
