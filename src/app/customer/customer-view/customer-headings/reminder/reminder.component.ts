import { Component } from '@angular/core';
import { SetReminderComponent } from './set-reminder/set-reminder.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(SetReminderComponent, {
      
    });
  }
}
