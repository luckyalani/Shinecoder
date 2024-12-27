import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { mainMenuData } from 'src/app/shared/menu-data';

@Component({
  selector: 'app-trade-india',
  templateUrl: './trade-india.component.html',
  styleUrls: ['./trade-india.component.css']
})
export class TradeIndiaComponent {
  constructor(private SidebarService: SidebarService) {
    this.SidebarService.updateData(mainMenuData)
  }
}
