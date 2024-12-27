import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { mainMenuData } from 'src/app/shared/menu-data';
@Component({
  selector: 'app-telegram-bot-notification',
  templateUrl: './telegram-bot-notification.component.html',
  styleUrls: ['./telegram-bot-notification.component.css']
})
export class TelegramBotNotificationComponent {
  constructor(private SidebarService: SidebarService) {
    this.SidebarService.updateData(mainMenuData)
  }
}
