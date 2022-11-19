import DateValueObject from '../../shared/domain/dateValueObject';

export default class PurchaseDate extends DateValueObject {
    constructor(value: string | number | Date) {
        super(value);
    }
}
