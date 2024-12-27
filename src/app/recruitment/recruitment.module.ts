import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { DashboardStepperComponent } from './dashboard-stepper/dashboard-stepper.component';
import { CampaignComponent } from './dashboard-stepper/campaign/campaign.component';
import { ClickAddNewComponent } from './dashboard-stepper/campaign/click-add-new/click-add-new.component';
import { GeneralDetailsComponent } from './dashboard-stepper/campaign/click-add-new/general-details/general-details.component';
import { CandidateRequirementsComponent } from './dashboard-stepper/campaign/click-add-new/candidate-requirements/candidate-requirements.component';
import { CampaignClickViewComponent } from './dashboard-stepper/campaign/campaign-click-view/campaign-click-view.component';
import { GeneralDetailsPopupComponent } from './dashboard-stepper/campaign/campaign-click-view/general-details-popup/general-details-popup.component';
import { CandidateRequirementsPopupComponent } from './dashboard-stepper/campaign/campaign-click-view/candidate-requirements-popup/candidate-requirements-popup.component';
import { CandidateProfileComponent } from './dashboard-stepper/candidate-profile/candidate-profile.component';
import { SendMailButtonPopupComponent } from './dashboard-stepper/candidate-profile/send-mail-button-popup/send-mail-button-popup.component';
import { ClickEditButtonComponent } from './dashboard-stepper/candidate-profile/click-edit-button/click-edit-button.component';
import { ClickViewButtonStepperComponent } from './dashboard-stepper/candidate-profile/click-view-button-stepper/click-view-button-stepper.component';
import { DetailsComponent } from './dashboard-stepper/candidate-profile/click-view-button-stepper/details/details.component';
import { RecruitmentHistoryComponent } from './dashboard-stepper/candidate-profile/click-view-button-stepper/recruitment-history/recruitment-history.component';
import { CapacityProfileComponent } from './dashboard-stepper/candidate-profile/click-view-button-stepper/capacity-profile/capacity-profile.component';
import { AttachmentComponent } from './dashboard-stepper/candidate-profile/click-view-button-stepper/attachment/attachment.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardStepperComponent,
    CampaignComponent,
    ClickAddNewComponent,
    GeneralDetailsComponent,
    CandidateRequirementsComponent,
    CampaignClickViewComponent,
    GeneralDetailsPopupComponent,
    CandidateRequirementsPopupComponent,
    CandidateProfileComponent,
    SendMailButtonPopupComponent,
    ClickEditButtonComponent,
    ClickViewButtonStepperComponent,
    DetailsComponent,
    RecruitmentHistoryComponent,
    CapacityProfileComponent,
    AttachmentComponent
  ],
  imports: [
    CommonModule,
    RecruitmentRoutingModule,
    MaterialModule
  ]
})
export class RecruitmentModule { }
