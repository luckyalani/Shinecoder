import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-bill',
  templateUrl: './popup-bill.component.html',
  styleUrls: ['./popup-bill.component.css']
})
export class PopupBillComponent {

  constructor(public dialog: MatDialog) { }

  closepopup(): void {
    const dialogclose = this.dialog.closeAll();
  }
}
