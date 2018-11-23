import React from 'react';

import { awesomeNotificationService } from '../services/NotificationService';

export function provideAwesomeNotificationService(Component) {
    return function(props) {
        return <Component {...props} notificationService={awesomeNotificationService} />;
    };
}
