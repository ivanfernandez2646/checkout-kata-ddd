import { EventEmitter } from 'stream';
import DomainEvent from '../../domain/domainEvent';
import EventBus from '../../domain/eventBus';
import DomainEventSubscribers from './domainEventSubscribers';

export default class InMemoryAsyncEventBus extends EventEmitter implements EventBus {
    async publish(events: Array<DomainEvent>): Promise<void> {
        events.map((e) => this.emit(e.eventName, e));
    }

    addSubscribers(subscribers: DomainEventSubscribers): void {
        subscribers.items.forEach((subscriber) =>
            subscriber.subscribedTo().forEach((event) => {
                this.on(event.EVENT_NAME, subscriber.on.bind(subscriber));
            })
        );
    }
}
