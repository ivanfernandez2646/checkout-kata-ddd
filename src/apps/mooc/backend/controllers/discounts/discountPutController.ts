import { Controller } from '../controller';
import { Request, Response } from 'express';
import DiscountCreator from '../../../../../Contexts/Mooc/discounts/application/create/discountCreator';
import httpStatus from 'http-status';
import DiscountExistsError from '../../../../../Contexts/Mooc/discounts/domain/discountExistsException';

export default class DiscountPutController implements Controller {
    constructor(private _discountCreator: DiscountCreator) {}

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params,
            { threshold, amount } = req.body;

        if (!id) {
            throw new Error('Id not found or it is invalid');
        }

        if (!threshold || isNaN(threshold)) {
            throw new Error('Threshold not found or it is invalid');
        }

        if (!amount || isNaN(amount)) {
            throw new Error('Amount not found or it is invalid');
        }

        //TODO: Implement handler for errors
        try {
            await this._discountCreator.run({ id: String(id), threshold: Number(threshold), amount: Number(amount) });
            res.sendStatus(httpStatus.CREATED);
        } catch (err) {
            if (err instanceof DiscountExistsError) {
                res.sendStatus(httpStatus.CONFLICT);
            } else {
                res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
