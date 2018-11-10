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
