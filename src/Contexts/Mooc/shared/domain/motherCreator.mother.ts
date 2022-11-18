import faker from 'faker';

export default class MotherCreator {
    static indexNumber(max: number): number {
        return faker.datatype.number({ min: 0, max });
    }

    static positiveNumber(max?: number): number {
        return faker.datatype.number({ min: 1, max });
    }

    static zeroOrPositiveNumber(max?: number): number {
        return faker.datatype.number({ min: 0, max });
    }

    static word(): string {
        return faker.lorem.word();
    }

    static words(): string {
        return faker.lorem.words();
    }

    static phrase(): string {
        return faker.lorem.sentence();
    }

    static phrases(): string {
        return faker.lorem.sentences();
    }

    static text(): string {
        return faker.lorem.paragraph();
    }

    static userName(): string {
        return faker.internet.userName();
    }

    static boolean(): boolean {
        return faker.datatype.boolean();
    }

    static uuid(): string {
        return faker.datatype.uuid();
    }
}