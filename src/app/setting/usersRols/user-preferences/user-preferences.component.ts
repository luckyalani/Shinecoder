import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewCustomFeildComponent } from './new-custom-feild/new-custom-feild.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  inviteuser(): void {
    const dialogRef = this.dialog.open(NewCustomFeildComponent, {
      data: {},
      width: '80%'
    });
  }
  customfield(): void {
    const dialogRef = this.dialog.open(CustomFieldsComponent, {
      data: {},
      width: '80%'
    });
  }
}
