import { Router, Request, Response } from 'express';
import DiscountGetController from '../controllers/discounts/discountGetController';
import DiscountPutController from '../controllers/discounts/discountPutController';
import container from '../dependency-injection';

export const register = (router: Router) => {
    const discountPutController: DiscountPutController = container.get('Apps.mooc.controllers.discounts.DiscountPutController');
    router.put('/discounts/:id', (req: Request, res: Response) => discountPutController.run(req, res));

    const discountGetController: DiscountGetController = container.get('Apps.mooc.controllers.discounts.DiscountGetController');
    router.get('/discounts/:id', (req: Request, res: Response) => discountGetController.run(req, res));
};
