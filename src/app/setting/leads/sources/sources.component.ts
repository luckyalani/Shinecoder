import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSourcePopupComponent } from './add-source-popup/add-source-popup.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent {

  constructor(public dialog: MatDialog) { }


  AddSourcePopup(): void {
    const dialogRef = this.dialog.open(AddSourcePopupComponent, {
      data: {},
      width:'80%',
    });
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }

}
