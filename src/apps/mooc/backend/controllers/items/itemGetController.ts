import ItemFinder from '../../../../../Contexts/Mooc/items/application/find/itemFinder';
import { Request, Response } from 'express';
import { Controller } from '../controller';
import httpStatus from 'http-status';
import ItemNotFoundException from '../../../../../Contexts/Mooc/items/domain/itemNotFoundException';

export default class ItemGetController implements Controller {
    constructor(private _itemFinder: ItemFinder) {}

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id) {
            throw new Error('Id not found or it is invalid');
        }

        //TODO: Implement handler for errors
        try {
            const Item = await this._itemFinder.run(id);
            res.status(httpStatus.FOUND).send(Item);
        } catch (err) {
            if (err instanceof ItemNotFoundException) {
                res.sendStatus(httpStatus.NOT_FOUND);
            } else {
                res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
}
