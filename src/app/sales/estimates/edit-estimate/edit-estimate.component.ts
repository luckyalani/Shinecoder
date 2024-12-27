import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupBillComponent } from '../popup-bill/popup-bill.component';

@Component({
  selector: 'app-edit-estimate',
  templateUrl: './edit-estimate.component.html',
  styleUrls: ['./edit-estimate.component.css']
})
export class EditEstimateComponent {
  constructor(public dialog: MatDialog) { }


  openPopup(): void {
    const dialogRef = this.dialog.open(PopupBillComponent, {
      data: {},
      width: '100%'
    });
  }
}
