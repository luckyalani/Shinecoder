import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddPriorityComponent } from './add-priority/add-priority.component';

@Component({
  selector: 'app-ticket-priority',
  templateUrl: './ticket-priority.component.html',
  styleUrls: ['./ticket-priority.component.css']
})
export class TicketPriorityComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(AddPriorityComponent, {
      data: {},
      width: '80%'
    });
  }

}
