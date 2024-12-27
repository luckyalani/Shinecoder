import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { ManageSharingClickEditPopupComponent } from './manage-sharing-click-edit-popup/manage-sharing-click-edit-popup.component';

@Component({
  selector: 'app-manage-sharing',
  templateUrl: './manage-sharing.component.html',
  styleUrls: ['./manage-sharing.component.css']
})
export class ManageSharingComponent {
  constructor(public dialog: MatDialog) { }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {


    });

  }

  addTaskPopup(): void {
    // const op = this.dialog.open(AddTaskPopupComponent, {
    //   data: {},
    //   width: '96%'
    // })
  }

  editPopup(): void {
    const op = this.dialog.open(ManageSharingClickEditPopupComponent, {
      data: {},
      minWidth: '80%'
    })
  }
}
