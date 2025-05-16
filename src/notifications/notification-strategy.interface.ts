export interface NotificationStrategy {
  send(message: string): void;
}
