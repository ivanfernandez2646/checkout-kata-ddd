import NumberValueObject from '../../shared/domain/numberValueObject';

export default class ItemPrice extends NumberValueObject {
    constructor(value: number) {
        ItemPrice.ensureIsValidItemPrice(value);

        super(value);
    }

    private static ensureIsValidItemPrice(value: number) {
        if (isNaN(value) || value <= 0) {
            throw new Error('Invalid item price. Value must be bigger than 0');
        }
    }
}
