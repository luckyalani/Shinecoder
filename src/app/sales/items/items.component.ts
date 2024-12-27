import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupGroupBtnComponent } from './popup-group-btn/popup-group-btn.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { NewItemComponent } from './new-item/new-item.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  constructor(public dialog: MatDialog) { }
  openPopup(): void {
    const dialogRef = this.dialog.open(PopupGroupBtnComponent, {
      data: {},
      width:'100%'
    });
  }
  openPopupDelete(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
  openNewItem(): void {
    const dialogRef = this.dialog.open(NewItemComponent, {
      data: {},
      width:'100%'
    });
  }
}
