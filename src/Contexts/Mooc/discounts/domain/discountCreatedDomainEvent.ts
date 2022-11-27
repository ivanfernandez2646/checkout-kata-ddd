import DomainEvent from '../../shared/domain/domainEvent';
import { DiscountPrimitives } from './discount';

type CreateDiscountDomainEventAttributes = {
    readonly discount: string;
};

export default class DiscountCreatedDomainEvent extends DomainEvent {
    static readonly EVENT_NAME: string = 'discount.created';

    readonly discount: DiscountPrimitives;

    constructor(params: { aggregateId: string; eventId?: string; occurredOn?: Date; discount: DiscountPrimitives }) {
        super({ aggregateId: params.aggregateId, eventName: DiscountCreatedDomainEvent.EVENT_NAME });
        this.discount = params.discount;
    }

    toPrimitives(): CreateDiscountDomainEventAttributes {
        const discount = JSON.stringify(this.discount);

        return { discount };
    }

    static fromPrimitives(params: {
        aggregateId: string;
        eventId: string;
        occurredOn: Date;
        attributes: CreateDiscountDomainEventAttributes;
    }): DomainEvent {
        const { aggregateId, eventId, occurredOn, attributes } = params;

        return new DiscountCreatedDomainEvent({ aggregateId, eventId, occurredOn, discount: JSON.parse(attributes.discount) });
    }
}
