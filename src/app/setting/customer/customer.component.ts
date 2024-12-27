import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  constructor(public dialog: MatDialog) { }

  openPopup(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

      data: {},
    });
  }
  addcustomer(): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      data: {},
      width:"80%",
    });
  }
}
