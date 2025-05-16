import { Controller, Post, Get, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async sendNotification(@Body() body: { message: string; type: string }) {
    return this.notificationsService.sendNotification(body.message, body.type);
  }

  @Get()
  async getAll() {
    return this.notificationsService.findAll();
  }
}
