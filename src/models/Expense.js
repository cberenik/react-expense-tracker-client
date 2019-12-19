import moment from 'moment';

export class Expense {
    /**
     * @param {number} id - id of the expense
     * @param {string} description - a short description of what the expense was
     * @param {number} amount - amount of money spent
     * @param {moment.Moment} purchaseDate - the date of the expense incursion
     * @param {Array} tags - any tags to put to the purchase, optional
     */
    constructor(id, description, amount, purchaseDate, tags) {
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.purchaseDate = moment(purchaseDate);
        this.tags = tags ? tags : [];
    }
}
