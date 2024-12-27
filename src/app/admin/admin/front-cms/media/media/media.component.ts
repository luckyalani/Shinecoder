import { Component } from '@angular/core';
import { AddMedia2Component } from '../add-media2/add-media2.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddMedia2Component, {
      
    });
  }

}
