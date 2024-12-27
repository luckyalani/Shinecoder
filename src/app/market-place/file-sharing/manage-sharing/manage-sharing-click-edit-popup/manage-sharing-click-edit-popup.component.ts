import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditClickMailIconComponent } from './edit-click-mail-icon/edit-click-mail-icon.component';

@Component({
  selector: 'app-manage-sharing-click-edit-popup',
  templateUrl: './manage-sharing-click-edit-popup.component.html',
  styleUrls: ['./manage-sharing-click-edit-popup.component.css']
})
export class ManageSharingClickEditPopupComponent {

  constructor(public dialog: MatDialog) { }

  mailPopUp() {
    this.dialog.closeAll();
    const mail = this.dialog.open(EditClickMailIconComponent, {
      minWidth: '60%'
    });
  }

}
