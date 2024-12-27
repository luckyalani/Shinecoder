import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeadsViewNewTaskComponent } from '../leads-view-new-task/leads-view-new-task.component';

@Component({
  selector: 'app-leads-view-task',
  templateUrl: './leads-view-task.component.html',
  styleUrls: ['./leads-view-task.component.css']
})
export class LeadsViewTaskComponent {
  constructor(public dialog:MatDialog){

    dialog.closeAll();
    console.log("constructor mai")
  
}

addNewTask(){
  const dialogRef=this.dialog.open(LeadsViewNewTaskComponent,{})
}
}
