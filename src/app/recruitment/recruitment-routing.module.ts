import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardStepperComponent } from './dashboard-stepper/dashboard-stepper.component';
import { CampaignClickViewComponent } from './dashboard-stepper/campaign/campaign-click-view/campaign-click-view.component';
import { ClickEditButtonComponent } from './dashboard-stepper/candidate-profile/click-edit-button/click-edit-button.component';
import { ClickViewButtonStepperComponent } from './dashboard-stepper/candidate-profile/click-view-button-stepper/click-view-button-stepper.component';

const routes: Routes = [
  // { path: '', component: DashboardComponent },
  { path: '', component: DashboardStepperComponent },
  { path: 'campaign-click-view', component: CampaignClickViewComponent },
  { path: 'click-edit-button', component: ClickEditButtonComponent },
  { path: 'click-view-button-stepper', component: ClickViewButtonStepperComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecruitmentRoutingModule {}
