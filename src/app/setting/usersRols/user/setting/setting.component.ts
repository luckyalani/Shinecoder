import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteUserComponent } from '../invite-user/invite-user.component';
import { InactiveComponent } from './inactive/inactive.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  inviteuser(): void {
    const dialogRef = this.dialog.open(InviteUserComponent, {
      data: {},
      width: '80%'
    });
  }
  inactive(): void {
    const dialogRef = this.dialog.open(InactiveComponent, {
      data: {},
    });
  }
  delete(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
}
