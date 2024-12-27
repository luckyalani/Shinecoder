import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-reminder-tab',
  templateUrl: './popup-reminder-tab.component.html',
  styleUrls: ['./popup-reminder-tab.component.css']
})
export class PopupReminderTabComponent {
  constructor(public dialog: MatDialog) { }

  closepopup(): void {
    const dialogclose = this.dialog.closeAll();
  }
}
