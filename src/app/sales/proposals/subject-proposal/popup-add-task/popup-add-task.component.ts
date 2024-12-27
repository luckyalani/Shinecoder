import { MatDialog } from '@angular/material/dialog';
import {Component} from '@angular/core';

@Component({
  selector: 'app-popup-add-task',
  templateUrl: './popup-add-task.component.html',
  styleUrls: ['./popup-add-task.component.css']
})
export class PopupAddTaskComponent {

  constructor(public dialog: MatDialog) { }

  closepopup(): void {
    const dialogclose = this.dialog.closeAll();
  }
}
