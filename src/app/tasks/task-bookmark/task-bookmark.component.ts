import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { ClickUpdateTaskBookmarkComponent } from './click-update-task-bookmark/click-update-task-bookmark.component';
import { ClickNewTaskBookmarkComponent } from './click-new-task-bookmark/click-new-task-bookmark.component';

@Component({
  selector: 'app-task-bookmark',
  templateUrl: './task-bookmark.component.html',
  styleUrls: ['./task-bookmark.component.css']
})
export class TaskBookmarkComponent {
  constructor(public dialog: MatDialog) { }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
    });
  }

  newTask(): void {
    const dialogRef = this.dialog.open(ClickNewTaskBookmarkComponent, {
      width: "85%"
    });
  }

  updateTask(): void {
    const dialogRef = this.dialog.open(ClickUpdateTaskBookmarkComponent, {
      width: ""
    });
  }
}
