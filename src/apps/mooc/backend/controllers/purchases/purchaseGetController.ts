import PurchaseFinder from '../../../../../Contexts/Mooc/purchases/application/find/purchaseFinder';
import { Request, Response } from 'express';
import { Controller } from '../controller';
import httpStatus from 'http-status';
import PurchaseNotFoundException from '../../../../../Contexts/Mooc/purchases/domain/purchaseNotFoundException';

export default class PurchaseGetController implements Controller {
    constructor(private _purchaseFinder: PurchaseFinder) {}

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id) {
            throw new Error('Id not found or it is invalid');
        }

        //TODO: Implement handler for errors
        try {
            const Purchase = await this._purchaseFinder.run(id);
            res.status(httpStatus.FOUND).send(Purchase);
        } catch (err) {
            if (err instanceof PurchaseNotFoundException) {
                res.sendStatus(httpStatus.NOT_FOUND);
            } else {
                res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
