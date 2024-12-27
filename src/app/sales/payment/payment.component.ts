import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(public dialog: MatDialog) { }


  openPopup(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

      data: {},
    });
  }
}
