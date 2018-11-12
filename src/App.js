import React, { Component } from 'react';
import './App.css';

import { PageShell } from './page-components/PageShell.jsx';
import { inMemoryExpenseService } from './services/ExpenseService';
import { ExpenseTableContainer } from './page-components/ExpenseTableContainer.jsx';
import { awesomeNotificationService } from './services/NotificationService';

class App extends Component {
    render() {
        const expenseList = (
            <ExpenseTableContainer
                expenseService={inMemoryExpenseService}
                notificationService={awesomeNotificationService}
            />
        );

        return <PageShell>{expenseList}</PageShell>;
    }
}

export default App;
