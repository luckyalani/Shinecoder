import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManipulationComponent } from '../manipulation/manipulation.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { MappingComponent } from './mapping/mapping.component';
import { MappingInvoiceComponent } from './mapping-invoice/mapping-invoice.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  constructor(public dialog: MatDialog) { }

  openPopup(): void {
    const dialogRef = this.dialog.open(ManipulationComponent, {

      data: {},
    });
  }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

      data: {},
    });
  }

  mapping(): void {
    const dialogRef = this.dialog.open(MappingComponent, {

      data: {},
      width:'80%'
    });
  }
  mapping_invoice(): void {
    const dialogRef = this.dialog.open(MappingInvoiceComponent, {

      data: {},
      width:'80%'
    });
  }
  
}

