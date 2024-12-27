import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { mainMenuData } from 'src/app/shared/menu-data';
@Component({
  selector: 'app-india-mart',
  templateUrl: './india-mart.component.html',
  styleUrls: ['./india-mart.component.css']
})
export class IndiaMartComponent {
  constructor(private SidebarService: SidebarService) {
    this.SidebarService.updateData(mainMenuData)
  }
}
