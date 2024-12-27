import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { mainMenuData } from 'src/app/shared/menu-data';
@Component({
  selector: 'app-telegram-notification',
  templateUrl: './telegram-notification.component.html',
  styleUrls: ['./telegram-notification.component.css']
})
export class TelegramNotificationComponent {
  constructor(private SidebarService: SidebarService) {
    this.SidebarService.updateData(mainMenuData)
  }
}
