import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { ClickEditConfigurationComponent } from './click-edit-configuration/click-edit-configuration.component';
import { ClickAddNewConfigurationComponent } from './click-add-new-configuration/click-add-new-configuration.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(public dialog: MatDialog) { }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {


    });

  }

  addNewConfiguration(): void {
    const op = this.dialog.open(ClickAddNewConfigurationComponent, {
      data: {},
      minWidth: '80%'
    })
  }

  editPopup(): void {
    const op = this.dialog.open(ClickEditConfigurationComponent, {
      data: {},
      minWidth: '80%'
    })
  }
}
