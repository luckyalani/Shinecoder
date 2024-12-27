import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSpamFilterComponent } from './add-spam-filter/add-spam-filter.component';

@Component({
  selector: 'app-spam-filter',
  templateUrl: './spam-filter.component.html',
  styleUrls: ['./spam-filter.component.css']
})
export class SpamFilterComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  openPopup(): void {
    const dialogRef = this.dialog.open(AddSpamFilterComponent, {
      data: {},
      width: '80%'
    });
  }
}
