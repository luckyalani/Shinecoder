import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskPopupComponent } from './new-task-popup/new-task-popup.component';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent {

  constructor(public dialog: MatDialog) {}
  newTaskPopup(): void {
    const dialogRef = this.dialog.open(NewTaskPopupComponent, {
      width: '80%'
    });
  }
}
