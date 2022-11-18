import NumberValueObject from '../../shared/domain/numberValueObject';

export default class DiscountAmount extends NumberValueObject {
    constructor(value: number) {
        DiscountAmount.ensureIsValidDiscountAmount(value);

        super(value);
    }

    private static ensureIsValidDiscountAmount(value: number) {
        if (isNaN(value) || value <= 0) {
            throw new Error('Invalid discount amount. Value must be bigger than 0');
        }
    }
}
