export default abstract class DateValueObject {
    readonly value: Date;

    constructor(value: Date | string | number) {
        this.value = new Date(value);
    }

    isBefore(other: DateValueObject) {
        return this.value < other.value;
    }

    isAfter(other: DateValueObject) {
        return this.value > other.value;
    }

    isEqual(other: DateValueObject) {
        return this.value === other.value;
    }
}
