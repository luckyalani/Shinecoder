import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AutoBackupPopupComponent } from './auto-backup-popup/auto-backup-popup.component';

@Component({
  selector: 'app-backup-database',
  templateUrl: './backup-database.component.html',
  styleUrls: ['./backup-database.component.css']
})
export class BackupDatabaseComponent {
  constructor(public dialog: MatDialog) { }

  autoBackupPopup(): void {
    const op = this.dialog.open(AutoBackupPopupComponent, {
      data: {},
      width: '80%'
    })
  }
}
