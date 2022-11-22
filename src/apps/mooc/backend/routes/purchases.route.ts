import { Router, Request, Response } from 'express';
import PurchaseGetController from '../controllers/purchases/purchaseGetController';
import PurchasePutController from '../controllers/purchases/purchasePutController';
import container from '../dependency-injection';

export const register = (router: Router) => {
    const discountPutController: PurchasePutController = container.get('Apps.mooc.controllers.purchases.PurchasePutController');
    router.put('/purchases/:id', (req: Request, res: Response) => discountPutController.run(req, res));

    const discountGetController: PurchaseGetController = container.get('Apps.mooc.controllers.purchases.PurchaseGetController');
    router.get('/purchases/:id', (req: Request, res: Response) => discountGetController.run(req, res));
};
