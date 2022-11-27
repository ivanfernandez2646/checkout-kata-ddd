import Uuid from './uuid';

export default abstract class DomainEvent {
    static EVENT_NAME: string;
    static fromPrimitives: (params: {
        aggregateId: string;
        eventName: string;
        eventId: string;
        occurredOn: Date;
        attributes: DomainEventAttributes;
    }) => DomainEvent;

    readonly aggregateId: string;
    readonly eventName: string;
    readonly eventId: string;
    readonly occurredOn: Date;

    constructor(params: { aggregateId: string; eventName: string; eventId?: string; occurredOn?: Date }) {
        const { aggregateId, eventName, eventId, occurredOn } = params;
        this.aggregateId = aggregateId;
        this.eventName = eventName;
        this.eventId = eventId || Uuid.random().value;
        this.occurredOn = occurredOn || new Date();
    }
}

export type DomainEventClass = {
    EVENT_NAME: string;
    fromPrimitives: (params: {
        aggregateId: string;
        eventName: string;
        eventId: string;
        occurredOn: Date;
        attributes: DomainEventAttributes;
    }) => DomainEvent;
};

type DomainEventAttributes = any;
