import React from 'react';
import { Table } from 'semantic-ui-react';

export class ExpenseListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
        };
    }

    componentWillMount() {
        this.setState({ expenses: this.props.expenseService.getAll() });
    }

    render() {
        const expenseRows = this.state.expenses.map(expense => {
            return (
                <Table.Row key={expense.id}>
                    <Table.Cell> {expense.description} </Table.Cell> <Table.Cell> {expense.amount} </Table.Cell>{' '}
                    <Table.Cell> {expense.purchaseDate.format('ll')} </Table.Cell>{' '}
                </Table.Row>
            );
        });
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell> Description </Table.HeaderCell> <Table.HeaderCell> Amount </Table.HeaderCell>{' '}
                        <Table.HeaderCell> Purchase Date </Table.HeaderCell>{' '}
                    </Table.Row>{' '}
                </Table.Header>
                <Table.Body> {expenseRows} </Table.Body>{' '}
            </Table>
        );
    }
}
