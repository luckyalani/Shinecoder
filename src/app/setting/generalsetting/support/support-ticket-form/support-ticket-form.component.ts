import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketPopupComponent } from './ticket-popup/ticket-popup.component';

@Component({
  selector: 'app-support-ticket-form',
  templateUrl: './support-ticket-form.component.html',
  styleUrls: ['./support-ticket-form.component.css']
})
export class SupportTicketFormComponent {
  constructor(public dialog: MatDialog) { }


  ticketPopup(): void {
    const dialogRef = this.dialog.open(TicketPopupComponent, {
      data: {},
      width: '80%',
    });
  }
}
