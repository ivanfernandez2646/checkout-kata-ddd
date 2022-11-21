import { Given, TableDefinition } from 'cucumber';
import Item from '../../../../../../src/Contexts/Mooc/items/domain/item';
import container from '../../../,,/../../../../src/apps/mooc/backend/dependency-injection';
import ItemCreator from '../../../../../../src/Contexts/Mooc/items/application/create/itemCreator';

Given('I have the following items in the platform', async (table: TableDefinition<Item>) => {
    const rows = table.rows(),
        itemCreator: ItemCreator = container.get('Contexts.Mooc.items.application.create.ItemCreator');

    for (let rowCount = 0; rowCount < rows.length; rowCount++) {
        let id!: string;
        let price!: number;
        let discountId!: string;

        for (let columnCount = 0; columnCount < rows[rowCount].length; columnCount++) {
            if (columnCount === 0) {
                id = rows[rowCount][columnCount];
            } else if (columnCount === 1) {
                price = Number(rows[rowCount][columnCount]);
            } else if (columnCount === 2) {
                discountId = rows[rowCount][columnCount];
            }
        }

        await itemCreator.run({ id, price, discountId });
    }
});
