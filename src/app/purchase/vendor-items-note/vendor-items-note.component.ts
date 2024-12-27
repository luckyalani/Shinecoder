import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendornotePopupComponent } from '../vendornote-popup/vendornote-popup.component';

@Component({
  selector: 'app-vendor-items-note',
  templateUrl: './vendor-items-note.component.html',
  styleUrls: ['./vendor-items-note.component.css']
})
export class VendorItemsNoteComponent {

  constructor(public dialog: MatDialog){
  }

  vendoritemsaddnotepopup(): void {
    const dialogRef = this.dialog.open(VendornotePopupComponent, {
      
    });
  }


}
