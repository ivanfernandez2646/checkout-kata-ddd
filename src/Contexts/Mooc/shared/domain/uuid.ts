import { randomUUID } from 'crypto';
import validate from 'uuid-validate';
import StringValueObject from './stringValueObject';

export default class Uuid extends StringValueObject {
    constructor(value: string) {
        Uuid.ensureIsValidUuid(value);

        super(value);
    }

    private static ensureIsValidUuid(value: string) {
        if (!validate(value)) {
            throw new Error(`Invalid UUID. Value: <${value}>`);
        }
    }

    static random(): Uuid {
        return new Uuid(randomUUID());
    }
}
