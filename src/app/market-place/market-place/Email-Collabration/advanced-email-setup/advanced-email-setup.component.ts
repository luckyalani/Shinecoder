import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { mainMenuData } from 'src/app/shared/menu-data';
@Component({
  selector: 'app-advanced-email-setup',
  templateUrl: './advanced-email-setup.component.html',
  styleUrls: ['./advanced-email-setup.component.css']
})
export class AdvancedEmailSetupComponent {
  constructor(private SidebarService: SidebarService) {
    this.SidebarService.updateData(mainMenuData)
  }
}
