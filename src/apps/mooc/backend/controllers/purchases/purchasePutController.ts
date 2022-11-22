import { Controller } from '../controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import PurchaseCreator from '../../../../../Contexts/Mooc/purchases/application/create/purchaseCreator';
import PurchaseExistsException from '../../../../../Contexts/Mooc/purchases/domain/purchaseExistsException';

export default class PurchasePutController implements Controller {
    constructor(private _purchaseCreator: PurchaseCreator) {}

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params,
            { itemIds } = req.body;

        if (!id) {
            throw new Error('Id not found or it is invalid');
        }

        if (!Array.isArray(itemIds)) {
            throw new Error('ItemIds not found or it is invalid');
        }

        //TODO: Implement handler for errors
        try {
            await this._purchaseCreator.run({ id: id, itemIds });
            res.sendStatus(httpStatus.CREATED);
        } catch (err) {
            if (err instanceof PurchaseExistsException) {
                res.sendStatus(httpStatus.CONFLICT);
            } else {
                res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
