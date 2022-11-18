import MotherCreator from '../../shared/domain/motherCreator.mother';

export default class Repeater {
    static random<T>(callable: (...args: any[]) => T, iterations: number): T[] {
        return Array(iterations || MotherCreator.positiveNumber(20))
            .fill({})
            .map(() => callable());
    }
}
