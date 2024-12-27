import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-deal',
  templateUrl: './edit-deal.component.html',
  styleUrls: ['./edit-deal.component.css']
})
export class EditDealComponent {
  filter: any = "filter";
  linkBox:any=false;

  linkBoxToggle=():any=>{
    console.log("chaling")
    this.linkBox=!this.linkBox;
  }
}
