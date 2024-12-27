import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManipulationComponent } from '../transactions/manipulation/manipulation.component';
import { AddChartOfAccountComponent } from './add-chart-of-account/add-chart-of-account.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-chart-of-account',
  templateUrl: './chart-of-account.component.html',
  styleUrls: ['./chart-of-account.component.css']
})
export class ChartOfAccountComponent {
  color='primary'
  constructor(public dialog: MatDialog) { }

  openPopup(): void {
    const dialogRef = this.dialog.open(ManipulationComponent, {

      data: {},
    });
  }
  add(): void {
    const dialogRef = this.dialog.open(AddChartOfAccountComponent, {
      data: {},
      width:'80%'
    });
  }
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
}
