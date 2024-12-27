import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeadsNewTasksComponent } from '../leads-new-tasks/leads-new-tasks.component';

@Component({
  selector: 'app-leads-edit-tasks',
  templateUrl: './leads-edit-tasks.component.html',
  styleUrls: ['./leads-edit-tasks.component.css']
})
export class LeadsEditTasksComponent {

  constructor(public dialog:MatDialog){

      dialog.closeAll();
      console.log("constructor mai")
    
  }

  addNewTaskk(){
    const dialogRef=this.dialog.open(LeadsNewTasksComponent,{})
  }

}
