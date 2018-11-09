import React, { Component } from 'react';
import './App.css';

import { PageShell } from './page-components/PageShell.jsx';
import { inMemoryExpenseService } from './services/ExpenseService';
import { ExpenseListContainer } from './page-components/ExpenseListContainer.jsx';

class App extends Component {
    render() {
        const expenseList = <ExpenseListContainer expenseService={inMemoryExpenseService} />;

        return <PageShell content={expenseList} />;
    }
}

export default App;
