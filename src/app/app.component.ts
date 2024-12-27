import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from './services/sidebar.service';
import { mainMenuData } from './shared/menu-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crm';
  sidebarState!: string;
  isMobile!: boolean;
  isLoggedIn: boolean = false;
  url!: string;
  sliderMode: any = 'side';

  constructor(
    private router: Router,
    private SidebarService: SidebarService
  ) {
    this.SidebarService.setData(mainMenuData)
    this.SidebarService.updateData(mainMenuData)
  }

  ngAfterViewChecked() {
    this.url = this.router.url
  }
}


