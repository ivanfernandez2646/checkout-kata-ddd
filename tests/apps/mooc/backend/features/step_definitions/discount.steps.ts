import { Given, TableDefinition } from 'cucumber';
import Discount from '../../../../../../src/Contexts/Mooc/discounts/domain/discount';
import container from '../../../,,/../../../../src/apps/mooc/backend/dependency-injection';
import DiscountCreator from '../../../../../../src/Contexts/Mooc/discounts/application/create/discountCreator';

Given('I have the following discounts in the platform', async (table: TableDefinition<Discount>) => {
    const rows = table.rows(),
        discountCreator: DiscountCreator = container.get('Contexts.Mooc.discounts.application.create.DiscountCreator');

    for (let rowCount = 0; rowCount < rows.length; rowCount++) {
        let id!: string;
        let threshold!: number;
        let amount!: number;

        for (let columnCount = 0; columnCount < rows[rowCount].length; columnCount++) {
            if (columnCount === 0) {
                id = rows[rowCount][columnCount];
            } else if (columnCount === 1) {
                threshold = Number(rows[rowCount][columnCount]);
            } else if (columnCount === 2) {
                amount = Number(rows[rowCount][columnCount]);
            }
        }

        await discountCreator.run({ id, threshold, amount });
    }
});
