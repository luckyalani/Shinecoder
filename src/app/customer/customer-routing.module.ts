import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { ImportCustomerComponent } from './customers/import-customer/import-customer.component';
import { EditCustomerComponent } from './customers/contact/edit-customer/edit-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { ContactComponent } from './customers/contact/contact.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { EditCustomFieldComponent } from './customer-view/edit-custom-field/edit-custom-field.component';
import { CustomerProfileContactComponent } from './customer-view/customer-headings/customer-profile-contact/customer-profile-contact.component';
import { NotesComponent } from './customer-view/customer-headings/notes/notes.component';
import { StatementComponent } from './customer-view/customer-headings/statement/statement.component';
import { InvoicesComponent } from './customer-view/customer-headings/invoices/invoices.component';
import { AccountSummaryComponent } from './customer-view/customer-headings/statement/account-summary/account-summary.component';
import { PaymentComponent } from './customer-view/customer-headings/payment/payment.component';
import { ProposalsComponent } from './customer-view/customer-headings/proposals/proposals.component';
import { CreditNotesComponent } from './customer-view/customer-headings/credit-notes/credit-notes.component';
import { EstimateComponent } from './customer-view/customer-headings/estimate/estimate.component';
import { SubscriptionComponent } from './customer-view/customer-headings/subscription/subscription.component';
import { ExpensesComponent } from './customer-view/customer-headings/expenses/expenses.component';
import { ContractComponent } from './customer-view/customer-headings/contract/contract.component';
import { ProjectComponent } from './customer-view/customer-headings/project/project.component';
import { EditNotesComponent } from './customer-view/customer-headings/notes/edit-notes/edit-notes.component';
import { ZipInvoicesComponent } from './customer-view/customer-headings/invoices/zip-invoices/zip-invoices.component';
import { DeleteComponent } from './delete/delete.component';
import { AssignAdminDialogueComponent } from './assign-admin-dialogue/assign-admin-dialogue.component';
import { ZipPaymentDialogueComponent } from './customer-view/customer-headings/payment/zip-payment-dialogue/zip-payment-dialogue.component';
import { ZipCreditNotesDialogueComponent } from './customer-view/customer-headings/credit-notes/zip-credit-notes-dialogue/zip-credit-notes-dialogue.component';
import { ZipEstimatesDialogueComponent } from './customer-view/customer-headings/estimate/zip-estimates-dialogue/zip-estimates-dialogue.component';
import { TicketsComponent } from './customer-view/customer-headings/tickets/tickets.component';
import { TaskComponent } from './customer-view/customer-headings/task/task.component';
import { RecordExpensesComponent } from './customer-view/customer-headings/expenses/record-expenses/record-expenses.component';
import { FilesComponent } from './customer-view/customer-headings/files/files.component';
import { VaultComponent } from './customer-view/customer-headings/vault/vault.component';
import { ReminderComponent } from './customer-view/customer-headings/reminder/reminder.component';
import { AddNewTaskComponent } from './customer-view/customer-headings/task/add-new-task/add-new-task.component';
import { MapComponent } from './customer-view/customer-headings/map/map.component';
import { VaultEntryComponent } from './customer-view/customer-headings/vault/vault-entry/vault-entry.component';
import { SetReminderComponent } from './customer-view/customer-headings/reminder/set-reminder/set-reminder.component';
import { ContractInformationComponent } from './customer-view/customer-headings/contract/contract-information/contract-information.component';
import { AddNewProjectComponent } from './customer-view/customer-headings/project/add-new-project/add-new-project.component';
import { NewProposalComponent } from '../sales/proposals/new-proposal/new-proposal.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent
  },
  {
    path: 'import-customer', component: ImportCustomerComponent
  },
  {
    path: 'edit-customer', component: EditCustomerComponent
  },
  {
    path: 'customer-detail', component: CustomerDetailComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'customer-view', component: CustomerViewComponent
  },
  {
    path: 'edit-custom-field', component: EditCustomFieldComponent
  },
  {
    path: 'customer-profile-contact', component: CustomerProfileContactComponent
  },
  {
    path: 'notes', component: NotesComponent
  },
  {
    path: 'statement', component: StatementComponent
  },
  {
    path: 'account-summary', component: AccountSummaryComponent
  },
  {
    path: 'invoices', component: InvoicesComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },
  {
    path: 'proposals', component: ProposalsComponent
  },
  {
    path: 'Credit-notes', component: CreditNotesComponent
  },
  {
    path: 'estimate', component: EstimateComponent
  },
  {
    path: 'subscription', component: SubscriptionComponent
  },
  {
    path: 'expenses', component: ExpensesComponent
  },
  {
    path: 'contract', component: ContractComponent
  },
  {
    path: 'project', component: ProjectComponent
  },
  {
    path: 'edit-notes', component: EditNotesComponent
  },
  {
    path: 'zip-invoices', component: ZipInvoicesComponent
  },
  {
    path: 'delete', component: DeleteComponent
  },
  {
    path: 'assign-admin-dialogue', component: AssignAdminDialogueComponent
  },
  {
    path: 'zip-payment-dialogue', component: ZipPaymentDialogueComponent
  },
  {
    path: 'zip-credit-notes-dialogue', component: ZipCreditNotesDialogueComponent
  },
  {
    path: 'zip-estimates-dialogue', component: ZipEstimatesDialogueComponent
  },
  {
    path: 'tickets', component: TicketsComponent
  },
  {
    path : 'task' , component : TaskComponent
  },
  {
    path : 'record-expenses', component : RecordExpensesComponent
  },
  {
    path : 'files', component : FilesComponent
  },
  {
    path : 'vault' , component : VaultComponent
  },
  {
    path : 'reminder' , component : ReminderComponent
  },
  {
    path : 'add-new-task' , component : AddNewTaskComponent
  },
  {
    path : 'map' , component : MapComponent
  },
  {
    path : 'vault-entry' , component : VaultEntryComponent
  },
  {
    path : 'set-reminder' , component : SetReminderComponent
  },
  {
    path : 'contract-information' , component : ContractInformationComponent
  },
 {
    path: 'task', component: TaskComponent
  },
  {
    path: 'new-project', component: AddNewProjectComponent
  },
  {
    path: 'new-proposal', component: NewProposalComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
