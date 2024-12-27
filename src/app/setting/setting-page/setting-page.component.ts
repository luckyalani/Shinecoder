import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { settingMenu } from 'src/app/shared/menu-data';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.css']
})
export class SettingPageComponent {

  constructor(private SidebarService: SidebarService){
    this.SidebarService.updateData(settingMenu)
  }
}
