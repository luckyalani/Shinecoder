import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent {

  constructor(private SidebarService : SidebarService,
    private _location: Location){
    this.SidebarService.updateData(null)
  }
  backClicked() {
    this._location.back();
  }

}
