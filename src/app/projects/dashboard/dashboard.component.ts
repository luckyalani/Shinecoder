import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { CopyProjectDialogeComponent } from './copy-project-dialoge/copy-project-dialoge.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public dialog: MatDialog) {}
  
 
  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
      
    });
    
  }
  
  
    openDialog(): void {
      const dialogRef = this.dialog.open(CopyProjectDialogeComponent, {
        
      });
    }

}
