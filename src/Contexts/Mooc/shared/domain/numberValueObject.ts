export default abstract class NumberValueObject {
    readonly value: number;

    constructor(value: number) {
        this.value = value;
    }
}
