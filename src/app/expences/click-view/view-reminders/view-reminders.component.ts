import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetProposalReminderComponent } from './set-proposal-reminder/set-proposal-reminder.component';

@Component({
  selector: 'app-view-reminders',
  templateUrl: './view-reminders.component.html',
  styleUrls: ['./view-reminders.component.css']
})
export class ViewRemindersComponent {
  constructor(public dialog: MatDialog) {}
  newTaskPopup(): void {
    const dialogRef = this.dialog.open(SetProposalReminderComponent, {
      width: '80%'
    });
  }
}
