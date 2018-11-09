import moment from 'moment';

export class Expense {
    /**
     * @param {number} id - id of the expense
     * @param {string} description - a short description of what the expense was
     * @param {number} amount - amount of money spent
     * @param {moment.Moment} purchaseDate - the date of the expense incursion
     */
    constructor(id, description, amount, purchaseDate) {
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.purchaseDate = moment(purchaseDate);
    }
}
