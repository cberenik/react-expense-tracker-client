import AWN from 'awesome-notifications';
import styles from 'awesome-notifications/dist/style.css'

class ConsoleNotificationService {
    info(message) {
        console.log(message);
    }

    success(message) {
        console.log(`${message} :)`);
    }

    error(message) {
        console.error(message);
    }
}

export const consoleNotificationService = new ConsoleNotificationService();

class AwesomeNotificationService {
    constructor() {
        this.notifier = new AWN({
            icons: {
                enabled: false
            },
            duration: 3000
        });
    }

    info(message) {
        this.notifier.info(message);
    }

    success(message) {
        this.notifier.success(message);
    }

    error(message) {
        this.notifier.error(message);
    }
}

export const awesomeNotificationService = new AwesomeNotificationService();
