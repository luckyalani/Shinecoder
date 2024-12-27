import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEstmatesStatusComponent } from './add-estmates-status/add-estmates-status.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  openPopup(): void {
    const dialogRef = this.dialog.open(AddEstmatesStatusComponent, {
      data: {},
      width: '80%'
    });
  }
}
