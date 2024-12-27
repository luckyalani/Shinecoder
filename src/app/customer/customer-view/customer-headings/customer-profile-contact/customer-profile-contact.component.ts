import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCustomerComponent } from '../../../customers/contact/edit-customer/edit-customer.component';
import { DeleteComponent } from '../../../delete/delete.component';

@Component({
  selector: 'app-customer-profile-contact',
  templateUrl: './customer-profile-contact.component.html',
  styleUrls: ['./customer-profile-contact.component.css']
})
export class CustomerProfileContactComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      
    });
  }
  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }

}
