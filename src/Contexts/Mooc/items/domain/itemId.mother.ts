import ItemId from './itemId';

export default class ItemIdMother {
    static create(value: string) {
        return new ItemId(value);
    }

    static random() {
        const randomCapital = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

        return ItemIdMother.create(randomCapital());
    }
}
