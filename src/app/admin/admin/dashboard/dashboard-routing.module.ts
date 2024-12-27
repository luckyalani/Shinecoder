import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SADashboardComponent } from './sa-dashboard/sa-dashboard.component';

const routes: Routes = [
  {
    path : '' , component : SADashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
