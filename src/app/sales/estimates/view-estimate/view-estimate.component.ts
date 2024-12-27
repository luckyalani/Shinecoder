import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupViewEstimateComponent } from '../popup-view-estimate/popup-view-estimate.component';

@Component({
  selector: 'app-view-estimate',
  templateUrl: './view-estimate.component.html',
  styleUrls: ['./view-estimate.component.css']
})
export class ViewEstimateComponent {
  constructor(public dialog: MatDialog) { }


  openPopup(): void {
    const dialogRef = this.dialog.open(PopupViewEstimateComponent, {

      data: {},
    });
  }
}
