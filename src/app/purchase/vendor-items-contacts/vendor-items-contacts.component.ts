import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseReadmorePopupComponent } from '../purchase-readmore-popup/purchase-readmore-popup.component';
import { VendorItemsContactspopupComponent } from '../vendor-items-contactspopup/vendor-items-contactspopup.component';
import { VendorItemsContactseditComponent } from '../vendor-items-contactsedit/vendor-items-contactsedit.component';


@Component({
  selector: 'app-vendor-items-contacts',
  templateUrl: './vendor-items-contacts.component.html',
  styleUrls: ['./vendor-items-contacts.component.css']
})
export class VendorItemsContactsComponent {


  color='primary'

  constructor(public dialog: MatDialog) {}


  deleteDialogcontacts(): void {
    const dialogRef = this.dialog.open(PurchaseReadmorePopupComponent, {
      
    });
  }

  newcontactpopup(): void{
    const dialogref=this.dialog.open(VendorItemsContactspopupComponent,{
      
    })
  }

  editcontact():void{
    const dialogref=this.dialog.open(VendorItemsContactseditComponent,{
      
    })


  }

}
