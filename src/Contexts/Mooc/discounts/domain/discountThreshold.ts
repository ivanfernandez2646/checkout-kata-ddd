import NumberValueObject from '../../shared/domain/numberValueObject';

export default class DiscountThreshold extends NumberValueObject {
    constructor(value: number) {
        DiscountThreshold.ensureIsValidDiscountThreshold(value);

        super(value);
    }

    private static ensureIsValidDiscountThreshold(value: number) {
        if (isNaN(value) || value <= 0) {
            throw new Error('Invalid discount threshold. Value must be bigger than 0');
        }
    }
}
