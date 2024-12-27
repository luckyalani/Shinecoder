import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddPredefinedRepliesComponent } from './add-predefined-replies/add-predefined-replies.component';

@Component({
  selector: 'app-predefined-replies',
  templateUrl: './predefined-replies.component.html',
  styleUrls: ['./predefined-replies.component.css']
})
export class PredefinedRepliesComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(AddPredefinedRepliesComponent, {
      data: {},
      width: '80%'
    });
  }
}
