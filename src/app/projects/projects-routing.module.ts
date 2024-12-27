import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CopyProjectDialogeComponent } from './dashboard/copy-project-dialoge/copy-project-dialoge.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'copy-project-dialoge', component: CopyProjectDialogeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
