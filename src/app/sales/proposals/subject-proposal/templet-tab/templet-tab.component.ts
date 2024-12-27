import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddTemplateTabComponent } from '../popup-add-template-tab/popup-add-template-tab.component';

@Component({
  selector: 'app-templet-tab',
  templateUrl: './templet-tab.component.html',
  styleUrls: ['./templet-tab.component.css']
})
export class TempletTabComponent {
  constructor(public dialog: MatDialog) { }


  openPopup(): void {
    const dialogRef = this.dialog.open(PopupAddTemplateTabComponent, {

      data: {},
      width: '100%'
    });
  }
}
