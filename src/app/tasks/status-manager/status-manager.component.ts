import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { UpdateTaskStatusComponent } from './update-task-status/update-task-status.component';

@Component({
  selector: 'app-status-manager',
  templateUrl: './status-manager.component.html',
  styleUrls: ['./status-manager.component.css']
})
export class StatusManagerComponent {
  constructor(public dialog: MatDialog) { }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
    });
  }

  updateTaskStatus(): void {
    const dialogRef = this.dialog.open(UpdateTaskStatusComponent, {
      width: "82%"
    });
  }

  closeAll(): void{
    const close = this.dialog.closeAll();
  }
}
