import { NotificationStrategy } from './notification-strategy.interface';
export class SMSNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(` SMS enviado: ${message}`);
  }
}
