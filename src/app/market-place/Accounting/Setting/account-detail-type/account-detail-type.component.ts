import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddAccountDetailsComponent } from './add-account-details/add-account-details.component';

@Component({
  selector: 'app-account-detail-type',
  templateUrl: './account-detail-type.component.html',
  styleUrls: ['./account-detail-type.component.css']
})
export class AccountDetailTypeComponent {
  constructor(public dialog: MatDialog) { }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
  addAccount(): void {
    const dialogRef = this.dialog.open(AddAccountDetailsComponent, {
      data: {},
      width:'80%'
    });
  }
}
