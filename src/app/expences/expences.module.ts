import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpencesRoutingModule } from './expences-routing.module';
import { ExpencesComponent } from './expences/expences.component';
import { MaterialModule } from '../material/material.module';
import { AddNewExpenseComponent } from './add-new-expense/add-new-expense.component';
import { EditExpencesComponent } from './edit-expences/edit-expences.component';
import { ClickViewComponent } from './click-view/click-view.component';
import { ViewExpenseComponent } from './click-view/view-expense/view-expense.component';
import { ViewTasksComponent } from './click-view/view-tasks/view-tasks.component';
import { ViewRemindersComponent } from './click-view/view-reminders/view-reminders.component';
import { NewTaskPopupComponent } from './click-view/view-tasks/new-task-popup/new-task-popup.component';
import { SetProposalReminderComponent } from './click-view/view-reminders/set-proposal-reminder/set-proposal-reminder.component';
import { ImportLeadsComponent } from './import-leads/import-leads.component';


@NgModule({
  declarations: [
    ExpencesComponent,
    AddNewExpenseComponent,
    EditExpencesComponent,
    ClickViewComponent,
    ViewExpenseComponent,
    ViewTasksComponent,
    ViewRemindersComponent,
    NewTaskPopupComponent,
    SetProposalReminderComponent,
    ImportLeadsComponent
  ],
  imports: [
    CommonModule,
    ExpencesRoutingModule,
    MaterialModule,
  ]
})
export class ExpencesModule { }
