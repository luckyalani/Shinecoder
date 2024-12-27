import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BatchComponent } from './batch/batch.component';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent {
  constructor(public dialog: MatDialog) { }


  openPopupBatch(): void {
    const dialogRef = this.dialog.open(BatchComponent, {
      // 
      data: {},
    });
  }
}
