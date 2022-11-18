import StringValueObject from './stringValueObject';
import validate from 'uuid-validate';

export default abstract class Uuid extends StringValueObject {
    constructor(value: string) {
        Uuid.ensureIsValidUuid(value);

        super(value);
    }

    private static ensureIsValidUuid(value: string) {
        if (!validate(value)) {
            throw new Error(`Invalid UUID. Value: <${value}>`);
        }
    }
}
