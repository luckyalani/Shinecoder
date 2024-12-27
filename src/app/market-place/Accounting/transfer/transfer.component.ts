import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManipulationComponent } from '../transactions/manipulation/manipulation.component';
import { TransferAddComponent } from './transfer-add/transfer-add.component';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  constructor(public dialog: MatDialog) { }

  openPopup(): void {
    const dialogRef = this.dialog.open(ManipulationComponent, {

      data: {},
    });
  }
  add(): void {
    const dialogRef = this.dialog.open(TransferAddComponent, {
      data: {},
      width:'80%'
    });
  }
}
