import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStatusComponent } from './add-status/add-status.component';

@Component({
  selector: 'app-ticket-status',
  templateUrl: './ticket-status.component.html',
  styleUrls: ['./ticket-status.component.css']
})
export class TicketStatusComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  openPopup(): void {
    const dialogRef = this.dialog.open(AddStatusComponent, {
      data: {},
      width: '80%'
    });
  }
}
