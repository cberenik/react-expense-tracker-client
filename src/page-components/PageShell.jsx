import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import dollarSign from '../dollar-sign.png';

import { ExpenseTableContainer } from './ExpenseTableContainer';
import { provideInMemoryService } from '../services/ExpenseService';
import { provideAwesomeNotificationService } from '../services/NotificationService';

const ProvidedExpenseTableContainer = provideAwesomeNotificationService(provideInMemoryService(ExpenseTableContainer));

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
                </Menu>
                <Container style={{ marginTop: '7rem' }}>
                    <Route path="/" exact component={ProvidedExpenseTableContainer} />
                </Container>
            </div>
        </Router>
    );
}
