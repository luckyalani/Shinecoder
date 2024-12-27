import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposalsComponent } from './proposals/proposals.component';
import { NewProposalComponent } from './proposals/new-proposal/new-proposal.component';
import { ViewProposalComponent } from './proposals/view-proposal/view-proposal.component';
import { SubjectProposalComponent } from './proposals/subject-proposal/subject-proposal.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditNotesComponent } from './credit-notes/credit-notes.component';
import { ItemsComponent } from './items/items.component';
import { EditEstimateComponent } from './estimates/edit-estimate/edit-estimate.component';
import { ViewEstimateComponent } from './estimates/view-estimate/view-estimate.component';
import { EstimateNameComponent } from './estimates/estimate-name/estimate-name.component';
import { NewInvoiceComponent } from './invoices/new-invoice/new-invoice.component';
import { ViewInvoiceComponent } from './invoices/view-invoice/view-invoice.component';
import { ViewPaymentsComponent } from './payment/view-payments/view-payments.component';
import { NewCreditNoteComponent } from './credit-notes/new-credit-note/new-credit-note.component';
import { ImportItemsComponent } from './items/import-items/import-items.component';

const routes: Routes = [
  // Proposal
  { path: '', component: ProposalsComponent },
  { path: 'proposal', component: ProposalsComponent },
  { path: 'add-new-proposal', component: NewProposalComponent },
  { path: 'view-proposal', component: ViewProposalComponent },
  { path: 'subject-proposal', component: SubjectProposalComponent },
  // Estimates
  { path: 'estimates', component: EstimatesComponent },
  { path: 'edit-estimate', component: EditEstimateComponent },
  { path: 'view-estimate', component: ViewEstimateComponent },
  { path: 'estimate-name', component: EstimateNameComponent },
  // Invoice 
  { path: 'invoices', component: InvoicesComponent },
  { path: 'new-invoice', component: NewInvoiceComponent },
  { path: 'view-invoice', component: ViewInvoiceComponent },

  // Payment
  { path: 'payment', component: PaymentComponent },
  { path: 'view-payments', component: ViewPaymentsComponent },

  // Credit Notes
  { path: 'credit-notes', component: CreditNotesComponent },
  { path: 'new-credit-note', component: NewCreditNoteComponent },

  // Items
  { path: 'items', component: ItemsComponent },
  { path: 'import-items', component: ImportItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
