import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { ClickViewPopupComponent } from './click-view-popup/click-view-popup.component';

@Component({
  selector: 'app-web-to-lead',
  templateUrl: './web-to-lead.component.html',
  styleUrls: ['./web-to-lead.component.css']
})
export class WebToLeadComponent {
  constructor(public dialog: MatDialog) { }


  openPopup(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

      data: {},
    });
  }
  ClickViewPopup(): void {
    const dialogRef = this.dialog.open(ClickViewPopupComponent, {
      data: {},
      width:'80%',
    });
  }
}
