import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { ViewStepperComponent } from './view-stepper/view-stepper.component';
import { MessageComponent } from './message/message.component';
import { ComposeEmailComponent } from './compose-email/compose-email.component';
import { AddRemarkComponent } from './add-remark/add-remark.component';
import { RemarkComponent } from './remark/remark.component';

@Component({
  selector: 'app-lead-manager-leads',
  templateUrl: './lead-manager-leads.component.html',
  styleUrls: ['./lead-manager-leads.component.css']
})
export class LeadManagerLeadsComponent {

  constructor(public dialog: MatDialog) { }


  deleteOpen() {
    const dialogRef = this.dialog.open(DeleteComponent, {});
  }

  view() {
    const dialogRef = this.dialog.open(ViewStepperComponent, {});
  }
  Message() {
    const dialogRef = this.dialog.open(MessageComponent, { width: '80%' });
  }
  ComposeEmail() {
    const dialogRef = this.dialog.open(ComposeEmailComponent, { width: '80%' });
  }
  addRemark() {
    const dialogRef = this.dialog.open(AddRemarkComponent, { width: '80%' });
  }
  Remark() {
    const dialogRef = this.dialog.open(RemarkComponent, { width: '80%' });
  }

}
