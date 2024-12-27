import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddNewLeadComponent } from './add-new-lead/add-new-lead.component';
import { LeadsEditStepperComponent } from './leads-edit-stepper/leads-edit-stepper.component';
import { LeadsNewTasksComponent } from './leads-new-tasks/leads-new-tasks.component';
import { LeadsViewStepperComponent } from './leads-view-stepper/leads-view-stepper.component';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent {
  constructor(public dialog: MatDialog) { }


  deleteOpen() {
    const dialogRef = this.dialog.open(DeleteComponent, {});
  }

  adddNewLead() {
    const dialogRef = this.dialog.open(AddNewLeadComponent, {})
  }
  editPopup() {
    const dialogRef = this.dialog.open(LeadsEditStepperComponent, {})
  }

  addNewTaskk() {
    const dialogRef = this.dialog.open(LeadsNewTasksComponent, {})
  }
  view() {
    const dialogRef = this.dialog.open(LeadsViewStepperComponent, {})
  }


}


