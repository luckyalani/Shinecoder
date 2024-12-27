import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CopyProjectDialogeComponent } from './dashboard/copy-project-dialoge/copy-project-dialoge.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CopyProjectDialogeComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule,
  ]
})
export class ProjectsModule { }
