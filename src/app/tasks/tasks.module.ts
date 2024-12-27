import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskComponent } from './task/task.component';
import { AddTaskPopupComponent } from './task/add-task-popup/add-task-popup.component';
import { TasksOverviewComponent } from './task/tasks-overview/tasks-overview.component';
import { StatusManagerComponent } from './status-manager/status-manager.component';
import { TimesheetManagerComponent } from './timesheet-manager/timesheet-manager.component';
import { SalesModule } from "../sales/sales.module";
import { EditComponent } from './task/edit/edit.component';
import { UpdateTaskStatusComponent } from './status-manager/update-task-status/update-task-status.component';
import { ClickAddNewComponent } from './timesheet-manager/click-add-new/click-add-new.component';
import { ClickEditComponent } from './timesheet-manager/click-edit/click-edit.component';
import { TaskBookmarkComponent } from './task-bookmark/task-bookmark.component';
import { ClickNewTaskBookmarkComponent } from './task-bookmark/click-new-task-bookmark/click-new-task-bookmark.component';
import { ClickUpdateTaskBookmarkComponent } from './task-bookmark/click-update-task-bookmark/click-update-task-bookmark.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        TaskComponent,
        AddTaskPopupComponent,
        TasksOverviewComponent,
        StatusManagerComponent,
        TimesheetManagerComponent,
        EditComponent,
        UpdateTaskStatusComponent,
        ClickAddNewComponent,
        ClickEditComponent,
        TaskBookmarkComponent,
        ClickNewTaskBookmarkComponent,
        ClickUpdateTaskBookmarkComponent,
      
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TasksRoutingModule,
        SalesModule,
        FormsModule 
    ]
})
export class TasksModule { }