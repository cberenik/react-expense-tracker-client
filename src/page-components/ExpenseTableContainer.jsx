import React from 'react';
import { ExpenseTable } from './ExpenseTable.jsx';

export class ExpenseListContainer extends React.Component {
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

    render() {
        return <ExpenseTable expenses={this.state.expenses} handleDeleteExpense={this.handleDeleteExpense} />;
    }
}
