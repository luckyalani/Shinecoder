import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManipulationComponent } from './manipulation/manipulation.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  constructor(public dialog: MatDialog) { }

  openPopup(): void {
    const dialogRef = this.dialog.open(ManipulationComponent, {

      data: {},
    });
  }
}
