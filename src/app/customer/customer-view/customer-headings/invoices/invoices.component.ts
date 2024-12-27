import { Component } from '@angular/core';
import { ZipInvoicesComponent } from './zip-invoices/zip-invoices.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ZipInvoicesComponent, {
      
    });
  }

}
