import React from 'react';
import { Expense } from '../models/Expense';

class InMemoryExpenseService {
    constructor() {
        this.expenses = [
            new Expense(1, 'Car parts', 123.45, new Date()),
            new Expense(2, 'Groceries', 15.96, new Date()),
        ];
    }

    /**
     * Adds an expense to the expense store
     * @param {string} description - a short description of what the expense was
     * @param {number} amount - amount of money spent
     * @param {moment.Moment} purchaseDate - the date of the expense incursion
     */
    addExpense = (description, amount, purchaseDate) => {
        const highest = this.expenses.reduce((a, b) => (a.id > b.id ? a : b), 0);
        const nextId = highest.id + 1;
        const newExpense = new Expense(nextId, description, amount, purchaseDate);
        this.expenses = [...this.expenses.slice(), newExpense];
        return Promise.resolve(newExpense);
    };

    removeExpense = expenseId => {
        this.expenses = [...this.expenses.slice(0, expenseId), ...this.expenses.slice(expenseId + 1)];
        return Promise.resolve();
    };

    getAll = () => Promise.resolve(this.expenses.slice());
}

export const inMemoryExpenseService = new InMemoryExpenseService();

export function provideInMemoryService(Component) {
    return function(props) {
        return <Component {...props} expenseService={inMemoryExpenseService} />;
    };
}
