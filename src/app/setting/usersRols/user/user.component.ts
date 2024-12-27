import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteUserComponent } from './invite-user/invite-user.component';
import { InviteAccountComponent } from './invite-account/invite-account.component';
import { ExportComponent } from './export/export.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  inviteuser(): void {
    const dialogRef = this.dialog.open(InviteUserComponent, {
      data: {},
      width: '80%'
    });
  }
  inviteaccount(): void {
    const dialogRef = this.dialog.open(InviteAccountComponent, {
      data: {},
      width: '80%'
    });
  }
  export(): void {
    const dialogRef = this.dialog.open(ExportComponent, {
      data: {},
      width: '80%'
    });
  }
}
