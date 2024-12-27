import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { PopupDuplicateTransactionComponent } from './popup-duplicate-transaction/popup-duplicate-transaction.component';

@Component({
  selector: 'app-transaction-series',
  templateUrl: './transaction-series.component.html',
  styleUrls: ['./transaction-series.component.css']
})
export class TransactionSeriesComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  delete(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
  openpopup(): void {
    const dialogRef = this.dialog.open(PopupDuplicateTransactionComponent, {
      data: {},
    });
  }
}
