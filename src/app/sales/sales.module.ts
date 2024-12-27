import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProposalsComponent } from './proposals/proposals.component';
import { NewProposalComponent } from './proposals/new-proposal/new-proposal.component';
import { ViewProposalComponent } from './proposals/view-proposal/view-proposal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SubjectProposalComponent } from './proposals/subject-proposal/subject-proposal.component';
import { PropsalTabComponent } from './proposals/subject-proposal/propsal-tab/propsal-tab.component';
import { CommentsTabComponent } from './proposals/subject-proposal/comments-tab/comments-tab.component';
import { ReminderTabComponent } from './proposals/subject-proposal/reminder-tab/reminder-tab.component';
import { TaskTabComponent } from './proposals/subject-proposal/task-tab/task-tab.component';
import { NotesTabComponent } from './proposals/subject-proposal/notes-tab/notes-tab.component';
import { TempletTabComponent } from './proposals/subject-proposal/templet-tab/templet-tab.component';
import { PopupReminderTabComponent } from './proposals/subject-proposal/popup-reminder-tab/popup-reminder-tab.component';
import { PopupAddTemplateTabComponent } from './proposals/subject-proposal/popup-add-template-tab/popup-add-template-tab.component';
import { CommonComponent } from './proposals/subject-proposal/common/common.component';
import { PopupAddTaskComponent } from './proposals/subject-proposal/popup-add-task/popup-add-task.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditNotesComponent } from './credit-notes/credit-notes.component';
import { ItemsComponent } from './items/items.component';
import { EditEstimateComponent } from './estimates/edit-estimate/edit-estimate.component';
import { CommonTagComponent } from './common-tag/common-tag.component';
import { PopupBillComponent } from './estimates/popup-bill/popup-bill.component';
import { ViewEstimateComponent } from './estimates/view-estimate/view-estimate.component';
import { PopupViewEstimateComponent } from './estimates/popup-view-estimate/popup-view-estimate.component';
import { EstimateNameComponent } from './estimates/estimate-name/estimate-name.component';
import { ViewEstimateContentComponent } from

'./estimates/view-estimate-content/view-estimate-content.component';
import { NewInvoiceComponent } from './invoices/new-invoice/new-invoice.component';
import { ViewInvoiceComponent } from './invoices/view-invoice/view-invoice.component';
import { ViewPaymentsComponent } from './payment/view-payments/view-payments.component';
import { NewCreditNoteComponent } from './credit-notes/new-credit-note/new-credit-note.component';
import { ImportItemsComponent } from './items/import-items/import-items.component';
import { PopupGroupBtnComponent } from './items/popup-group-btn/popup-group-btn.component';
import { NewItemComponent } from './items/new-item/new-item.component';
import { BatchComponent } from './invoices/batch/batch.component';


@NgModule({
  declarations: [

    ProposalsComponent,
    NewProposalComponent,
    ViewProposalComponent,
    SubjectProposalComponent,
    PropsalTabComponent,
    CommentsTabComponent,
    ReminderTabComponent,
    TaskTabComponent,
    NotesTabComponent,
    TempletTabComponent,
    PopupReminderTabComponent,
    PopupAddTemplateTabComponent,
    CommonComponent,
    PopupAddTaskComponent,
    EstimatesComponent,
    InvoicesComponent,
    PaymentComponent,
    CreditNotesComponent,
    ItemsComponent,
    EditEstimateComponent,
    CommonTagComponent,
    PopupBillComponent,
    ViewEstimateComponent,
    PopupViewEstimateComponent,
    EstimateNameComponent,
    ViewEstimateContentComponent,
    NewInvoiceComponent,
    ViewInvoiceComponent,
    ViewPaymentsComponent,
    NewCreditNoteComponent,
    ImportItemsComponent,
    PopupGroupBtnComponent,
    NewItemComponent,
    BatchComponent

  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MaterialModule,
    MatDatepickerModule
  ],
  exports:[
    CommonTagComponent,
    NewProposalComponent,
    SubjectProposalComponent,
    PropsalTabComponent,
    CommentsTabComponent,
    ReminderTabComponent,
    TaskTabComponent,
    NotesTabComponent,
    TempletTabComponent,
  ]
})
export class SalesModule { }
