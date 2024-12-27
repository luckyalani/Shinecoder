import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewLeadStatusPopupComponent } from './new-lead-status-popup/new-lead-status-popup.component';

import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent {
  constructor(public dialog: MatDialog) { }


  NewLeadStatusPopup(): void {
    const dialogRef = this.dialog.open(NewLeadStatusPopupComponent, {
      data: {},
      width:'80%',
    });
  }
  openPopup(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
}
