import { Controller } from '../controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ItemCreator from '../../../../../Contexts/Mooc/items/application/create/itemCreator';
import ItemExistsException from '../../../../../Contexts/Mooc/items/domain/itemExistsException';

export default class ItemPutController implements Controller {
    constructor(private _itemCreator: ItemCreator) {}

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params,
            { price, discountId } = req.body;

        if (!id) {
            throw new Error('Id not found or it is invalid');
        }

        if (!price || isNaN(price)) {
            throw new Error('Price not found or it is invalid');
        }

        if (!discountId) {
            throw new Error('DiscountId not found or it is invalid');
        }

        //TODO: Implement handler for errors
        try {
            await this._itemCreator.run({ id: String(id), price, discountId: String(discountId) });
            res.sendStatus(httpStatus.CREATED);
        } catch (err) {
            if (err instanceof ItemExistsException) {
                res.sendStatus(httpStatus.CONFLICT);
            } else {
                res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
