import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupBillComponent } from '../../estimates/popup-bill/popup-bill.component';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent {
  constructor(public dialog: MatDialog) { }


  openPopup(): void {
    const dialogRef = this.dialog.open(PopupBillComponent, {
      data: {},
    });
  }
}
