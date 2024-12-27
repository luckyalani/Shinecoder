import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendorItemsContactspopupComponent } from '../vendor-items-contactspopup/vendor-items-contactspopup.component';


@Component({
  selector: 'app-vendor-multipletab-contacts',
  templateUrl: './vendor-multipletab-contacts.component.html',
  styleUrls: ['./vendor-multipletab-contacts.component.css']
})
export class VendorMultipletabContactsComponent {

  constructor(public dialog: MatDialog) {}


  vendorcontactpopup(): void{
    const dialogref=this.dialog.open(VendorItemsContactspopupComponent,{
      
    })
  }

}
