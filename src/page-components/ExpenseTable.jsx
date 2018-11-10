import React from 'react';
import { Table, Button } from 'semantic-ui-react';

export function ExpenseTable(props) {
    const expenseRows = props.expenses.map(expense => {
        return (
            <Table.Row key={expense.id}>
                <Table.Cell> {expense.description} </Table.Cell>
                <Table.Cell> {expense.amount} </Table.Cell>
                <Table.Cell> {expense.purchaseDate.format('ll')} </Table.Cell>
                <Table.Cell>
                    <Button color="red" inverted onClick={() => props.handleDeleteExpense(expense.id)}>
                        Delete
                    </Button>
                </Table.Cell>
            </Table.Row>
        );
    });
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell> Description </Table.HeaderCell>
                    <Table.HeaderCell> Amount </Table.HeaderCell>
                    <Table.HeaderCell> Purchase Date </Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>
            <Table.Body>{expenseRows}</Table.Body>
        </Table>
    );
}
