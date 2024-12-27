import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { PopupSeriesPreferenceComponent } from './popup-series-preference/popup-series-preference.component';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  delete(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
  openpop(): void {
    const dialogRef = this.dialog.open(PopupSeriesPreferenceComponent, {
      data: {},
    });
  }
}
