import React from 'react';
import moment from 'moment';

import { ExpenseTable } from './ExpenseTable.jsx';
import { AddExpenseForm } from './AddExpenseForm.jsx';

export class ExpenseTableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
        };
    }

    componentWillMount() {
        this.props.expenseService
            .getAll()
            .then(expenses => this.setState({ expenses }))
            .catch(err => this.props.notificationService.error(err));
    }

    handleDeleteExpense = expenseId => {
        this.props.expenseService
            .removeExpense(expenseId)
            .then(() => {
                const removalIndex = this.state.expenses.map(expense => expense.id).indexOf(expenseId);
                this.setState({
                    expenses: [
                        ...this.state.expenses.slice(0, removalIndex),
                        ...this.state.expenses.slice(removalIndex + 1),
                    ],
                });
                this.props.notificationService.success('Deleted expense');
            })
            .catch(() => this.props.notificationService.error('Failed to delete expense'));
    };

    handleAddExpense = (description, amount, purchaseDate) => {
        this.props.expenseService
            .addExpense(description, amount, moment(purchaseDate))
            .then(newExpense => {
                this.setState({
                    expenses: [...this.state.expenses.slice(), newExpense],
                });
                this.props.notificationService.success('Added expense');
            })
            .catch(err => this.props.notificationService.error('Failed to add expense'));
    };

    render() {
        // TODO: Move add expense form, likely to a modal
        return (
            <React.Fragment>
                <ExpenseTable expenses={this.state.expenses} handleDeleteExpense={this.handleDeleteExpense} />
                <AddExpenseForm handleSubmit={this.handleAddExpense} />
            </React.Fragment>
        );
    }
}
