import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
// import { ClickEditComponent } from './click-edit/click-edit.component';
// import { ClickAddNewComponent } from './click-add-new/click-add-new.component';

@Component({
  selector: 'app-timesheet-manager',
  templateUrl: './timesheet-manager.component.html',
  styleUrls: ['./timesheet-manager.component.css']
})
export class TimesheetManagerComponent {
  constructor(public dialog: MatDialog) { }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

    });

  }

  // edit(): void {
  //   const dialogRef = this.dialog.open(ClickNewTaskBookmarkComponent, {

  //   });

  // }

  // add(): void {
  //   const dialogRef = this.dialog.open(ClickUpdateTaskBookmarkComponent, {

  //   });

  // }

  selectedDate: any;
  name: string = 'Angular 6';

  onSelect(event: any) {
    console.log(event);
    this.selectedDate = event;
  }
}
