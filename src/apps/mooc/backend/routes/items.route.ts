import { Router, Request, Response } from 'express';
import ItemGetController from '../controllers/items/itemGetController';
import ItemPutController from '../controllers/items/itemPutController';
import container from '../dependency-injection';

export const register = (router: Router) => {
    const itemPutController: ItemPutController = container.get('Apps.mooc.controllers.items.ItemPutController');
    router.put('/items/:id', (req: Request, res: Response) => itemPutController.run(req, res));

    const itemGetController: ItemGetController = container.get('Apps.mooc.controllers.items.ItemGetController');
    router.get('/items/:id', (req: Request, res: Response) => itemGetController.run(req, res));
};
