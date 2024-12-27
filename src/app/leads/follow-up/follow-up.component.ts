import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClickViewComponent } from './click-view/click-view.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';

@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css']
})
export class FollowUpComponent {
  constructor(public dialog: MatDialog) { }

  clickView() {
    const view = this.dialog.open(ClickViewComponent)
  }

  deleteOpen() {
    const dialogRef = this.dialog.open(DeleteComponent);
  }

  edit=():void=>{
    const popup=this.dialog.open(ManageScheduleComponent);
  }


}
