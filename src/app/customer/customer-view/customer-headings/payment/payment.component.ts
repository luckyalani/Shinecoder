import { Component } from '@angular/core';
import { ZipPaymentDialogueComponent } from './zip-payment-dialogue/zip-payment-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ZipPaymentDialogueComponent, {
      
    });
  }
}
