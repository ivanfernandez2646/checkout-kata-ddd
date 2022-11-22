import { Given, TableDefinition } from 'cucumber';
import Purchase from '../../../../../../src/Contexts/Mooc/purchases/domain/purchase';
import container from '../../../,,/../../../../src/apps/mooc/backend/dependency-injection';
import PurchaseCreator from '../../../../../../src/Contexts/Mooc/purchases/application/create/purchaseCreator';

Given('I have the following purchases in the platform', async (table: TableDefinition<Purchase>) => {
    const rows = table.rows(),
        purchaseCreator: PurchaseCreator = container.get('Contexts.Mooc.purchases.application.create.PurchaseCreator');

    for (let rowCount = 0; rowCount < rows.length; rowCount++) {
        let id!: string;
        let itemIds!: string[];
        let date: string | number | Date | undefined;

        for (let columnCount = 0; columnCount < rows[rowCount].length; columnCount++) {
            if (columnCount === 0) {
                id = rows[rowCount][columnCount];
            } else if (columnCount === 1) {
                itemIds = (rows[rowCount][columnCount] || '').replace('[', '').replace(']', '').split(',');
            } else if (columnCount === 2) {
                date = rows[rowCount][columnCount];
            }
        }

        await purchaseCreator.run({ id, itemIds, date });
    }
});
