import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export class ReportsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
        };
    }

    componentWillMount() {
        this.props.expenseService.getAll().then(expenses => this.setState({ expenses }));
    }

    render() {
        // TODO: calculate colors based on tags
        const data = {
            datasets: [
                {
                    data: this.state.expenses.map(expense => expense.amount),
                    backgroundColor: [
                        'rgba(242, 67, 67, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                    ],
                },
            ],
            labels: this.state.expenses.map(expense => expense.description),
        };

        return (
            <div>
                <Doughnut data={data} />
            </div>
        );
    }
}
