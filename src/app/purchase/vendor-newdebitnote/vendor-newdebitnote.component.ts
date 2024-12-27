import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendorDnPopupComponent } from '../vendor-dn-popup/vendor-dn-popup.component';



@Component({
  selector: 'app-vendor-newdebitnote',
  templateUrl: './vendor-newdebitnote.component.html',
  styleUrls: ['./vendor-newdebitnote.component.css']
})
export class VendorNewdebitnoteComponent {

  constructor(public dialog: MatDialog) {}


  debitnotepopup(): void {
    const dialogRef = this.dialog.open(VendorDnPopupComponent, {
      
    });
  }


}
