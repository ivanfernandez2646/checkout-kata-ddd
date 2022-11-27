import DomainEventSubscribers from '../infrastructure/eventBus/domainEventSubscribers';
import DomainEvent from './domainEvent';

export default interface EventBus {
    publish(events: Array<DomainEvent>): Promise<void>;
    addSubscribers(subscribers: DomainEventSubscribers): void;
}
