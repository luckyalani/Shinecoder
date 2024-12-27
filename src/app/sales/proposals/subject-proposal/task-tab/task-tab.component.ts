import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAddTaskComponent } from '../popup-add-task/popup-add-task.component';

@Component({
  selector: 'app-task-tab',
  templateUrl: './task-tab.component.html',
  styleUrls: ['./task-tab.component.css']
})
export class TaskTabComponent {
  constructor(public dialog: MatDialog) { }


  openPopup(): void {
    const dialogRef = this.dialog.open(PopupAddTaskComponent, {

      data: {},
      width:'100%'
    });
  }
}
