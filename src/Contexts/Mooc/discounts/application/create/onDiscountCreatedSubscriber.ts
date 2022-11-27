import { DomainEventClass } from '../../../shared/domain/domainEvent';
import DomainEventSubscriber from '../../../shared/domain/domainEventSubscriber';
import DiscountCreatedDomainEvent from '../../domain/discountCreatedDomainEvent';

export default class OnDiscountCreatedSubscribers implements DomainEventSubscriber<DiscountCreatedDomainEvent> {
    subscribedTo(): DomainEventClass[] {
        return [DiscountCreatedDomainEvent];
    }

    async on(domainEvent: DiscountCreatedDomainEvent): Promise<void> {
        console.log('DISCOUNT CREATED DOMAIN EVENT', domainEvent);
        console.log('ATTRIBUTES', domainEvent.discount);
    }
}
