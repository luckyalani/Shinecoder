import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { SidebarService } from 'src/app/services/sidebar.service';
import { accountingMenu } from 'src/app/shared/menu-data';

@Component({
  selector: 'app-accounting-tabs',
  templateUrl: './accounting-tabs.component.html',
  styleUrls: ['./accounting-tabs.component.css']
})
export class AccountingTabsComponent {


  constructor(private SidebarService: SidebarService) {
    this.SidebarService.updateData(accountingMenu)
  }
  labelName: string = 'Dashboard';

  selectedTabValue(event: MatTabChangeEvent) {
    console.log(event);
    this.labelName = event.tab.textLabel;
    console.log(this.labelName);
  }
}
