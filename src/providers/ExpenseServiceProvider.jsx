import React from 'react';

import { inMemoryExpenseService } from '../services/ExpenseService';

export function provideInMemoryService(Component) {
    return function(props) {
        return <Component {...props} expenseService={inMemoryExpenseService} />;
    };
}
