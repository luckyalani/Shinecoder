import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { manufacturingMenu } from 'src/app/shared/menu-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private SidebarService: SidebarService){
    this.SidebarService.updateData(manufacturingMenu)
  }
}
