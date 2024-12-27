import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddTaskPopupComponent } from './add-task-popup/add-task-popup.component';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(public dialog: MatDialog) { }
  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {


    });

  }

  addTaskPopup(): void {
    const op = this.dialog.open(AddTaskPopupComponent, {
      data: {},
      width: '96%'
    })
  }

  editTaskPopup(): void {
    const op = this.dialog.open(EditComponent, {
      data: {},
      width: '96%'
    })
  }
}
