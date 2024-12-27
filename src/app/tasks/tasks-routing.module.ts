import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TasksOverviewComponent } from './task/tasks-overview/tasks-overview.component';
import { StatusManagerComponent } from './status-manager/status-manager.component';
import { TimesheetManagerComponent } from './timesheet-manager/timesheet-manager.component';
import { TaskBookmarkComponent } from './task-bookmark/task-bookmark.component';

const routes: Routes = [
  {
    path: '', component: TaskComponent
  },
  {
    path: 'tasks-overview', component: TasksOverviewComponent
  },
  {
    path: 'status-manager', component: StatusManagerComponent
  },
  {
    path: 'timesheet-manager', component: TimesheetManagerComponent
  },
  {
    path: 'task-bookmark', component: TaskBookmarkComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
