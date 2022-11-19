import StringValueObject from '../../shared/domain/stringValueObject';

export default class ItemId extends StringValueObject {
    constructor(value: string) {
        ItemId.ensureIsValidItemId(value);

        super(value);
    }

    private static ensureIsValidItemId(value: string) {
        const capitalLetterRegex = new RegExp(/[A-Z]/g);

        if (!capitalLetterRegex.test(value)) {
            throw new Error('Invalid item id. Value must be between A-Z');
        }
    }
}
