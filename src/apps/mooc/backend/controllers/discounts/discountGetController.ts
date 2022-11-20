import DiscountFinder from '../../../../../Contexts/Mooc/discounts/application/find/discountFinder';
import { Request, Response } from 'express';
import { Controller } from '../controller';
import httpStatus from 'http-status';

export default class DiscountGetController implements Controller {
    constructor(private _discountFinder: DiscountFinder) {}

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id) {
            throw new Error('Id not found or it is invalid');
        }

        //TODO: Implement handler for errors
        try {
            const discount = await this._discountFinder.run(id);
            res.status(httpStatus.FOUND).send(discount);
        } catch (err) {
            // if (err instanceof DiscountExistsError) {
            //     res.sendStatus(httpStatus.CONFLICT);
            // } else {
            //     res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
            // }
        }
    }
}
