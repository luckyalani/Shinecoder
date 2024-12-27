import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendorItemsDnPopupComponent } from '../vendor-items-dn-popup/vendor-items-dn-popup.component';


@Component({
  selector: 'app-vendor-items-newdebitnotes',
  templateUrl: './vendor-items-newdebitnotes.component.html',
  styleUrls: ['./vendor-items-newdebitnotes.component.css']
})
export class VendorItemsNewdebitnotesComponent {
  constructor(public dialog: MatDialog) {}


  vnitemsdnpopup(): void {
    const dialogRef = this.dialog.open(VendorItemsDnPopupComponent, {
      
    });
  }


}
