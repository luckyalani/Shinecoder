import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddPaymentModeComponent } from './add-payment-mode/add-payment-mode.component';

@Component({
  selector: 'app-payment-modes',
  templateUrl: './payment-modes.component.html',
  styleUrls: ['./payment-modes.component.css']
})
export class PaymentModesComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(AddPaymentModeComponent, {
      data: {},
      width: '80%'
    });
  }
}
