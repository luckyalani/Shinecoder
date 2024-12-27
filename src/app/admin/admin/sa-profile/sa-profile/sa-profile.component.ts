import { Component } from '@angular/core';
import { SaDeleteComponent } from '../sa-delete/sa-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sa-profile',
  templateUrl: './sa-profile.component.html',
  styleUrls: ['./sa-profile.component.css']
})
export class SaProfileComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  
 
  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(SaDeleteComponent, {
      
    });
  }

}
