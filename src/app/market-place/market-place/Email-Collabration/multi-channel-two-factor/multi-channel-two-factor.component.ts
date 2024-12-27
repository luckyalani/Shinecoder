import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { mainMenuData } from 'src/app/shared/menu-data';
@Component({
  selector: 'app-multi-channel-two-factor',
  templateUrl: './multi-channel-two-factor.component.html',
  styleUrls: ['./multi-channel-two-factor.component.css']
})
export class MultiChannelTwoFactorComponent {
  constructor(private SidebarService: SidebarService) {
    this.SidebarService.updateData(mainMenuData)
  }
}
