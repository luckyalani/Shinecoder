import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupReminderTabComponent } from '../popup-reminder-tab/popup-reminder-tab.component';

@Component({
  selector: 'app-reminder-tab',
  templateUrl: './reminder-tab.component.html',
  styleUrls: ['./reminder-tab.component.css']
})
export class ReminderTabComponent {
  constructor(public dialog: MatDialog) { }


  openPopup(): void {
    const dialogRef = this.dialog.open(PopupReminderTabComponent, {

      data: {},
      width:'100%',
    });
  }
}
