import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuData: any;

  constructor(
    private sideBarService: SidebarService
  ) { 
    this.sideBarService.sharedData$.subscribe((data) => {
      this.menuData = data
    })
  }

  toggleSideNav() {
    this.sideBarService.toggleDrawer();
  }
}
