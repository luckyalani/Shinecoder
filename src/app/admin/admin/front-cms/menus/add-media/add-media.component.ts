import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  
 
  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }
}
