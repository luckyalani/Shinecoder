import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-add-template-tab',
  templateUrl: './popup-add-template-tab.component.html',
  styleUrls: ['./popup-add-template-tab.component.css']
})
export class PopupAddTemplateTabComponent {
  constructor(public dialog: MatDialog) { }

  closepopup(): void {
    const dialogclose = this.dialog.closeAll();
  }
}
