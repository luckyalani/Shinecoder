import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-work-center',
  templateUrl: './work-center.component.html',
  styleUrls: ['./work-center.component.css']
})
export class WorkCenterComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  
 
  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }
}
