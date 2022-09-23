export class Message {

    hour: string;
    message: string;
    user: string;

    constructor(hour: string, message: string, user: string) {
        this.hour = hour;
        this.message = message;
        this.user = user;
    }
}