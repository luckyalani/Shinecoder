import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupBillComponent } from 'src/app/sales/estimates/popup-bill/popup-bill.component';
import { AddItemsComponent } from './add-items/add-items.component';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.css']
})
export class EditBtnComponent {
  constructor(public dialog: MatDialog) { }
  openPopup(): void {
    const dialogRef = this.dialog.open(PopupBillComponent, {
      data: {},
      width:'80%'
    });
  }
  additems(): void {
    const dialogRef = this.dialog.open(AddItemsComponent, {
      data: {},
      width:'80%'
    });
  }
}
