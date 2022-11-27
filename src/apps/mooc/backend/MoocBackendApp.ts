import EventBus from '../../../Contexts/Mooc/shared/domain/eventBus';
import DomainEventSubscribers from '../../../Contexts/Mooc/shared/infrastructure/eventBus/domainEventSubscribers';
import container from './dependency-injection';
import { Server } from './server';

export class MoocBackendApp {
    server?: Server;

    async start() {
        const port = process.env.PORT || '5000';
        this.configureEventBus();
        this.server = new Server(port);
        return this.server.listen();
    }

    get httpServer() {
        return this.server?.getHTTPServer();
    }

    async stop() {
        return this.server?.stop();
    }

    configureEventBus(): void {
        const eventBus: EventBus = container.get('Contexts.Mooc.shared.domain.EventBus');
        const subscribers = DomainEventSubscribers.from(container);

        eventBus.addSubscribers(subscribers);
    }
}
