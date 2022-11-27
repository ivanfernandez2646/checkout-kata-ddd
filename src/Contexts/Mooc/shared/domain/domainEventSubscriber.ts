import DomainEvent, { DomainEventClass } from './domainEvent';

export default interface DomainEventSubscriber<T extends DomainEvent> {
    subscribedTo(): Array<DomainEventClass>;
    on(domainEvent: T): Promise<void>;
}
