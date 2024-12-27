import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSpanFilterPopupComponent } from './add-span-filter-popup/add-span-filter-popup.component';

@Component({
  selector: 'app-click-span-filter',
  templateUrl: './click-span-filter.component.html',
  styleUrls: ['./click-span-filter.component.css']
})
export class ClickSpanFilterComponent {
  constructor(public dialog: MatDialog) { }


  AddSpanFilterPopup(): void {
    const dialogRef = this.dialog.open(AddSpanFilterPopupComponent, {
      data: {},
      width:'80%'
    });
  }
}
