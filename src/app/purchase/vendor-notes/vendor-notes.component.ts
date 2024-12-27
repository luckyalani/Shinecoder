import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendornotePopupComponent } from '../vendornote-popup/vendornote-popup.component';


@Component({
  selector: 'app-vendor-notes',
  templateUrl: './vendor-notes.component.html',
  styleUrls: ['./vendor-notes.component.css']
})
export class VendorNotesComponent {

  constructor(public dialog: MatDialog){
  }

  addnotepopup(): void {
    const dialogRef = this.dialog.open(VendornotePopupComponent, {
      
    });
  }


}
