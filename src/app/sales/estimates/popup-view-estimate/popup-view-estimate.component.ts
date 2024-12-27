import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-view-estimate',
  templateUrl: './popup-view-estimate.component.html',
  styleUrls: ['./popup-view-estimate.component.css']
})
export class PopupViewEstimateComponent {

  constructor(public dialog: MatDialog) { }

  closepopup(): void {
    const dialogclose = this.dialog.closeAll();
  }
}
