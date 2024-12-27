import { Component } from '@angular/core';

@Component({
  selector: 'app-leads-view-profile',
  templateUrl: './leads-view-profile.component.html',
  styleUrls: ['./leads-view-profile.component.css']
})
export class LeadsViewProfileComponent {

  main:boolean=true;

  toggleMain(){
    this.main=!this.main;
  }

}
