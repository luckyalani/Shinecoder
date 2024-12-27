import { Component } from '@angular/core';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewTaskComponent, {
      
    });
  }
  
  
  

}
