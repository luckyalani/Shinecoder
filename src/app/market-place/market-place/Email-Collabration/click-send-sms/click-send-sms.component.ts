import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { mainMenuData } from 'src/app/shared/menu-data';
@Component({
  selector: 'app-click-send-sms',
  templateUrl: './click-send-sms.component.html',
  styleUrls: ['./click-send-sms.component.css']
})
export class ClickSendSmsComponent {
  constructor(private SidebarService: SidebarService) {
    this.SidebarService.updateData(mainMenuData)
  }
}
