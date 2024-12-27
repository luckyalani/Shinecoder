import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads/leads.component';
import { MaterialModule } from '../material/material.module';
import { AddNewLeadComponent } from './leads/add-new-lead/add-new-lead.component';
import { SalesModule } from "../sales/sales.module";
import { LeadsEditStepperComponent } from './leads/leads-edit-stepper/leads-edit-stepper.component';
import { EditProfileComponent } from './leads/edit-profile/edit-profile.component';
import { LeadsEditProposalComponent } from './leads/leads-edit-proposal/leads-edit-proposal.component';
import { LeadsNewProposalComponent } from './leads/leads-new-proposal/leads-new-proposal.component';
import { LeadsEditTasksComponent } from './leads/leads-edit-tasks/leads-edit-tasks.component';
import { LeadsNewTasksComponent } from './leads/leads-new-tasks/leads-new-tasks.component';
import { EditCustomFieldComponent } from './leads/edit-custom-field/edit-custom-field.component';
import { AddCustomFieldComponent } from './leads/add-custom-field/add-custom-field.component';
import { EditReminderComponent } from './leads/edit-reminder/edit-reminder.component';
import { SetProposalReminderComponent } from './leads/set-proposal-reminder/set-proposal-reminder.component';
import { LeadsNotesComponent } from './leads/leads-notes/leads-notes.component';
import { LeadsEditActivityLogComponent } from './leads/leads-edit-activity-log/leads-edit-activity-log.component';
import { LeadsViewStepperComponent } from './leads/leads-view-stepper/leads-view-stepper.component';
import { LeadsViewProfileComponent } from './leads/leads-view-stepper/leads-view-profile/leads-view-profile.component';
import { LeadsViewConvertToCustomerComponent } from './leads/leads-view-stepper/leads-view-convert-to-customer/leads-view-convert-to-customer.component';
import { LeadsViewEditProfileComponent } from './leads/leads-view-stepper/leads-view-edit-profile/leads-view-edit-profile.component';
import { LeadsViewProposalComponent } from './leads/leads-view-stepper/leads-view-proposal/leads-view-proposal.component';
import { LeadsViewNewProposalComponent } from './leads/leads-view-stepper/leads-view-new-proposal/leads-view-new-proposal.component';
import { LeadsViewNewTaskComponent } from './leads/leads-view-stepper/leads-view-new-task/leads-view-new-task.component';
import { LeadsViewTaskComponent } from './leads/leads-view-stepper/leads-view-task/leads-view-task.component';
import { LeadsViewAttachmentComponent } from './leads/leads-view-stepper/leads-view-attachment/leads-view-attachment.component';
import { ImportLeadsComponent } from './leads/import-leads/import-leads.component';
import { LeadFilterComponent } from './lead-filter/lead-filter.component';
import { LeadManagerComponent } from './lead-manager/lead-manager.component';
import { LeedsManagerMeetingComponent } from './lead-manager/leeds-manager-meeting/leeds-manager-meeting.component';
import { LeedsManagerRemarkComponent } from './lead-manager/leeds-manager-remark/leeds-manager-remark.component';
import { LeedsManagerMeetingDetailComponent } from './lead-manager/leeds-manager-meeting-detail/leeds-manager-meeting-detail.component';
import { LeadManagerUpdateMeetingDetailsComponent } from './lead-manager/lead-manager-update-meeting-details/lead-manager-update-meeting-details.component';
import { LeadManagerLeadsComponent } from './lead-manager/lead-manager-leads/lead-manager-leads.component';
import { ViewStepperComponent } from './lead-manager/lead-manager-leads/view-stepper/view-stepper.component';
import { ViewStepperAllComponent } from './lead-manager/lead-manager-leads/view-stepper/view-stepper-all/view-stepper-all.component';
import { ViewStepperRemarkComponent } from './lead-manager/lead-manager-leads/view-stepper/view-stepper-remark/view-stepper-remark.component';
import { MessageComponent } from './lead-manager/lead-manager-leads/message/message.component';
import { ComposeEmailComponent } from './lead-manager/lead-manager-leads/compose-email/compose-email.component';
import { AddRemarkComponent } from './lead-manager/lead-manager-leads/add-remark/add-remark.component';
import { RemarkComponent } from './lead-manager/lead-manager-leads/remark/remark.component';
import { SMSComponent } from './lead-manager/sms/sms.component';
import { LeadManagerMailboxComponent } from './lead-manager/lead-manager-mailbox/lead-manager-mailbox.component';
import { LeadComposeEmailComponent } from './lead-manager/lead-manager-mailbox/lead-compose-email/lead-compose-email.component';
import { LeadInboxComponent } from './lead-manager/lead-manager-mailbox/lead-inbox/lead-inbox.component';
import { LeadSentComponent } from './lead-manager/lead-manager-mailbox/lead-sent/lead-sent.component';
import { LeadDraftComponent } from './lead-manager/lead-manager-mailbox/lead-draft/lead-draft.component';
import { LeadTrashComponent } from './lead-manager/lead-manager-mailbox/lead-trash/lead-trash.component';
import { LeadSettingsComponent } from './lead-manager/lead-manager-mailbox/lead-settings/lead-settings.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { ClickViewComponent } from './follow-up/click-view/click-view.component';
import { ManageScheduleComponent } from './follow-up/manage-schedule/manage-schedule.component';
import { AddScgeduleComponent } from './follow-up/add-scgedule/add-scgedule.component';


@NgModule({
    declarations: [
        LeadsComponent,
        AddNewLeadComponent,
        LeadsEditStepperComponent,
        EditProfileComponent,
        LeadsEditProposalComponent,
        LeadsNewProposalComponent,
        LeadsEditTasksComponent,
        LeadsNewTasksComponent,
        EditCustomFieldComponent,
        AddCustomFieldComponent,
        EditReminderComponent,
        SetProposalReminderComponent,
        LeadsNotesComponent,
        LeadsEditActivityLogComponent,
        LeadsViewStepperComponent,
        LeadsViewProfileComponent,
        LeadsViewConvertToCustomerComponent,
        LeadsViewEditProfileComponent,
        LeadsViewProposalComponent,
        LeadsViewNewProposalComponent,
        LeadsViewNewTaskComponent,
        LeadsViewTaskComponent,
        LeadsViewAttachmentComponent,
        ImportLeadsComponent,
        LeadFilterComponent,
        LeadManagerComponent,
        LeedsManagerMeetingComponent,
        LeedsManagerRemarkComponent,
        LeedsManagerMeetingDetailComponent,
        LeadManagerUpdateMeetingDetailsComponent,
        LeadManagerLeadsComponent,
        ViewStepperComponent,
        ViewStepperAllComponent,
        ViewStepperRemarkComponent,
        MessageComponent,
        ComposeEmailComponent,
        AddRemarkComponent,
        RemarkComponent,
        SMSComponent,
        LeadManagerMailboxComponent,
        LeadComposeEmailComponent,
        LeadInboxComponent,
        LeadSentComponent,
        LeadDraftComponent,
        LeadTrashComponent,
        LeadSettingsComponent,
        FollowUpComponent,
        ClickViewComponent,
        AddScgeduleComponent,
        ManageScheduleComponent,

    ],
    imports: [
        CommonModule,
        LeadsRoutingModule,
        MaterialModule,
        SalesModule
    ]
})
export class LeadsModule { }
