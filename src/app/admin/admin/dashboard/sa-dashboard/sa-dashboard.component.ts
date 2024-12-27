import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
import { adminMenu } from 'src/app/shared/menu-data';

@Component({
  selector: 'app-sa-dashboard',
  templateUrl: './sa-dashboard.component.html',
  styleUrls: ['./sa-dashboard.component.css']
})
export class SADashboardComponent {
  constructor(
    private router: Router,
    private SidebarService: SidebarService
  ) {
    this.SidebarService.setData(adminMenu)
    this.SidebarService.updateData(adminMenu)
  }
}
