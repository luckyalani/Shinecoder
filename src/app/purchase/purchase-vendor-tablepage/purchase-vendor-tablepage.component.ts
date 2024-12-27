import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PurchaseReadmorePopupComponent } from '../purchase-readmore-popup/purchase-readmore-popup.component';
import { VendorConticonEditComponent } from '../vendor-conticon-edit/vendor-conticon-edit.component';

@Component({
  selector: 'app-purchase-vendor-tablepage',
  templateUrl: './purchase-vendor-tablepage.component.html',
  styleUrls: ['./purchase-vendor-tablepage.component.css']
})
export class PurchaseVendorTablepageComponent {

  color='primary'

  constructor(public dialog: MatDialog) {}

  deleteDialogvendortable(): void {
    const dialogRef = this.dialog.open(PurchaseReadmorePopupComponent, {
      
    });
  }
  contactedit():void{
    const dialogRef = this.dialog.open(VendorConticonEditComponent, {
      
    });

  }


}
