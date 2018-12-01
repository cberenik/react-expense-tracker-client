import React from 'react';
import { Button, Input, Form } from 'semantic-ui-react';

export class AddExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            amount: 0,
            purchaseDate: new Date(),
        };
    }

    handleInputChanged = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state.description, this.state.amount, this.state.purchaseDate);
    };

    handleClear = () => {
        this.setState({
            description: '',
            amount: 0,
            purchaseDate: new Date(),
        });
    };

    render() {
        // TODO: add tag input field
        return (
            <Form>
                <Form.Field>
                    <label>Description</label>
                    <Input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleInputChanged}
                        placeholder="A short description of your purchase"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Amount</label>
                    <Input type="number" name="amount" value={this.state.amount} onChange={this.handleInputChanged} />
                </Form.Field>
                <Form.Field>
                    <label>Purchase Date</label>
                    <Input
                        type="date"
                        name="purchaseDate"
                        value={this.state.purchaseDate}
                        onChange={this.handleInputChanged}
                    />
                </Form.Field>
                <Button type="submit" color="green" onClick={this.handleSubmit}>
                    Submit
                </Button>
                <Button color="red" basic onClick={this.handleClear}>
                    Clear
                </Button>
            </Form>
        );
    }
}
