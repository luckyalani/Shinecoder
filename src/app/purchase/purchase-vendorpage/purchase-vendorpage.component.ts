import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseReadmorePopupComponent } from '../purchase-readmore-popup/purchase-readmore-popup.component';


@Component({
  selector: 'app-purchase-vendorpage',
  templateUrl: './purchase-vendorpage.component.html',
  styleUrls: ['./purchase-vendorpage.component.css']
})
export class PurchaseVendorpageComponent {

  color='primary'

  constructor(public dialog: MatDialog) {}

  deleteDialogvendor(): void {
    const dialogRef = this.dialog.open(PurchaseReadmorePopupComponent, {
      
    });
  }

}
