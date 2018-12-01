import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import dollarSign from '../dollar-sign.png';

import { ExpenseTableContainer } from './ExpenseTableContainer';
import { provideInMemoryService } from '../services/ExpenseService';
import { provideAwesomeNotificationService } from '../services/NotificationService';
import { ReportsContainer } from './ReportsContainer';

const ProvidedExpenseTableContainer = provideAwesomeNotificationService(provideInMemoryService(ExpenseTableContainer));
const ProvidedReportsContainer = provideInMemoryService(ReportsContainer);

export function PageShell() {
    return (
        <Router>
            <div>
                <Menu fixed="top" inverted>
                    <Menu.Item header>
                        <Image size="mini" src={dollarSign} style={{ marginRight: '1.5em' }} />
                        Expense Tracker
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/reports">Reports</Link>
                    </Menu.Item>
                </Menu>
                <Container style={{ marginTop: '7rem' }}>
                    <Route path="/" exact component={ProvidedExpenseTableContainer} />
                    <Route path="/reports" component={ProvidedReportsContainer} />
                </Container>
            </div>
        </Router>
    );
}
