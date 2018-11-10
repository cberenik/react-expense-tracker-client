import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

export function PageShell(props) {
    return (
        <div>
            <Menu fixed="top" inverted>
                <Menu.Item header>
                    <Image size="mini" src="../dollar-sign.png" style={{ marginRight: '1.5em' }} />
                    Expense Tracker
                </Menu.Item>
            </Menu>

            <Container style={{ marginTop: '7em' }}>{props.content}</Container>
        </div>
    );
}
