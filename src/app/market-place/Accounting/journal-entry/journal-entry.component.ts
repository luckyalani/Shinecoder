import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManipulationComponent } from '../transactions/manipulation/manipulation.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent {
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
}
