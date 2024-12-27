import { VendorItemsPurchaseOrderComponent } from './vendor-items-purchase-order/vendor-items-purchase-order.component';
import { VendorItemsContactsComponent } from './vendor-items-contacts/vendor-items-contacts.component';
import { VendorSecondcontactComponent } from './vendor-secondcontact/vendor-secondcontact.component';
import { VendorPaymentsComponent } from './vendor-payments/vendor-payments.component';
import { VendorPurchaseOrderComponent } from './vendor-purchase-order/vendor-purchase-order.component';
import { PurchaseImportitemPageComponent } from './purchase-importitem-page/purchase-importitem-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseInstallPageComponent } from './purchase-install-page/purchase-install-page.component';
import { PucrhaseReadmoreComponent } from './pucrhase-readmore/pucrhase-readmore.component';
import { PurchaseVendorpageComponent } from './purchase-vendorpage/purchase-vendorpage.component';
import { PurchaseVendorTablepageComponent } from './purchase-vendor-tablepage/purchase-vendor-tablepage.component';
import { PurchaseVendorItemsComponent } from './purchase-vendor-items/purchase-vendor-items.component';
import { PurchaseNewvendorComponent } from './purchase-newvendor/purchase-newvendor.component';
import { PurchaseVendorMultipletabPagesComponent } from './purchase-vendor-multipletab-pages/purchase-vendor-multipletab-pages.component';
import { VendorMultipletabContactsComponent } from './vendor-multipletab-contacts/vendor-multipletab-contacts.component';
import { VendorQuotationsComponent } from './vendor-quotations/vendor-quotations.component';
import { VendorPurchaseinvoiceComponent } from './vendor-purchaseinvoice/vendor-purchaseinvoice.component';
import { VendorDebitnotesComponent } from './vendor-debitnotes/vendor-debitnotes.component';
import { VendorExpensesComponent } from './vendor-expenses/vendor-expenses.component';
import { VendorNotesComponent } from './vendor-notes/vendor-notes.component';
import { VendorAttachmentfilesComponent } from './vendor-attachmentfiles/vendor-attachmentfiles.component';
import { VendorImportVendorComponent } from './vendor-import-vendor/vendor-import-vendor.component';
import { VendoritemsMultipletabsComponent } from './vendoritems-multipletabs/vendoritems-multipletabs.component';
import { VendorItemsQuotationsComponent } from './vendor-items-quotations/vendor-items-quotations.component';
import { VendorItemsContractsComponent } from './vendor-items-contracts-remove/vendor-items-contracts.component';
import { VendorItemsPurchaseInvoiceComponent } from './vendor-items-purchase-invoice/vendor-items-purchase-invoice.component';
import { VendorItemsDebitNotesComponent } from './vendor-items-debit-notes/vendor-items-debit-notes.component';
import { VendorItemsPaymentsComponent } from './vendor-items-payments/vendor-items-payments.component';
import { VendorItemsExpensesComponent } from './vendor-items-expenses/vendor-items-expenses.component';
import { VendorItemsNoteComponent } from './vendor-items-note/vendor-items-note.component';
import { VendorItemsAttachmentsFilesComponent } from './vendor-items-attachments-files/vendor-items-attachments-files.component';
import { VendorExpensesRecordExpenseComponent } from './vendor-expenses-record-expense/vendor-expenses-record-expense.component';
import { VendorPurchaseStatementComponent } from './vendor-purchase-statement/vendor-purchase-statement.component';
import { VendorNewdebitnoteComponent } from './vendor-newdebitnote/vendor-newdebitnote.component';
import { VendorItemsPurchasestatementComponent } from './vendor-items-purchasestatement/vendor-items-purchasestatement.component';
import { VendorItemsRecordexpenseComponent } from './vendor-items-recordexpense/vendor-items-recordexpense.component';
import { VendorNewquotationsComponent } from './vendor-newquotations/vendor-newquotations.component';
import { VendorItemsNewdebitnotesComponent } from './vendor-items-newdebitnotes/vendor-items-newdebitnotes.component';
import { VendorPiNewpurchaseinvoiceComponent } from './vendor-pi-newpurchaseinvoice/vendor-pi-newpurchaseinvoice.component';
import { VendorItemsPiNewpurchaseinvoiceComponent } from './vendor-items-pi-newpurchaseinvoice/vendor-items-pi-newpurchaseinvoice.component';
import { VendorPoNewpurchaseorderComponent } from './vendor-po-newpurchaseorder/vendor-po-newpurchaseorder.component';
import { VendorItemsPoNewpurchaseorderComponent } from './vendor-items-po-newpurchaseorder/vendor-items-po-newpurchaseorder.component';
import { VendorContractsNewcontractsComponent } from './vendor-contracts-newcontracts/vendor-contracts-newcontracts.component';
import { VendorItemsContractsNewcontractsComponent } from './vendor-items-contracts-newcontracts/vendor-items-contracts-newcontracts.component';
import { VendorItemsNewquotationsComponent } from './vendor-items-newquotations/vendor-items-newquotations.component';

const routes: Routes = [

  
  {
    path: 'purchase-install', component: PurchaseInstallPageComponent
  },
  {
    path: 'read-more', component: PucrhaseReadmoreComponent
  },
  {
    path: 'vendor-page', component: PurchaseVendorpageComponent
  },
  {
    path: 'vendor-table', component: PurchaseVendorTablepageComponent
  },
  {
    path: 'vendor-items', component: PurchaseVendorItemsComponent
  },
  {
    path: 'Import-items-purchase', component: PurchaseImportitemPageComponent
  },
  {
    path: 'new-vendor', component: PurchaseNewvendorComponent
  },
  {
    path: 'vendor-multipletabs', component: PurchaseVendorMultipletabPagesComponent
  },
  {
    path: 'vendor-contacts', component: VendorMultipletabContactsComponent
  },
  {
    path: 'vendor-profile', component: PurchaseVendorMultipletabPagesComponent
  },
  {
    path: 'vendor-quotations', component: VendorQuotationsComponent
  },
  {
    path: 'vendor-purchaseorder', component: VendorPurchaseOrderComponent
  },
  {
    path: 'vendor-purchaseinvoice', component: VendorPurchaseinvoiceComponent
  },
  {
    path: 'vendor-purchasedebitnotes', component: VendorDebitnotesComponent
  },
  {
    path: 'vendor-payments', component: VendorPaymentsComponent
  },
  {
    path: 'vendor-expenses', component: VendorExpensesComponent
  },
  {
    path: 'vendor-notes', component: VendorNotesComponent
  },
  {
    path: 'vendor-attachfiles', component: VendorAttachmentfilesComponent
  },
  {
    path: 'vendor-secondcontact', component:  VendorSecondcontactComponent
  },
  {
    path: 'vendor-import-vendor', component:  VendorImportVendorComponent
  },
  {
    path: 'vendor-items-multipletabs', component:  VendoritemsMultipletabsComponent
  },
  {
    path: 'vendor-items-contacts', component:  VendorItemsContactsComponent
  },
  {
    path: 'vendor-items-Quotations', component:  VendorItemsQuotationsComponent
  },
  {
    path: 'vendor-items-contracts', component:  VendorItemsContractsComponent
  },
  {
    path: 'vendor-items-purchaseorder', component:  VendorItemsPurchaseOrderComponent
  },
  {
    path: 'vendor-items-purchaseinvoice', component:  VendorItemsPurchaseInvoiceComponent
  },
  {
    path: 'vendor-items-debitnotes', component:  VendorItemsDebitNotesComponent
  },
  {
    path: 'vendor-items-payments', component:  VendorItemsPaymentsComponent
  },
  {
    path: 'vendor-items-Expenses', component:  VendorItemsExpensesComponent
  },
  {
    path: 'vendor-items-Note', component:  VendorItemsNoteComponent
  },
  {
    path: 'vendor-items-attachmentsfiles', component:  VendorItemsAttachmentsFilesComponent
  },
  {
    path: 'vendor-record-expenses', component:  VendorExpensesRecordExpenseComponent
  },
  {
    path: 'vendor-purchasestatement', component:  VendorPurchaseStatementComponent
  },
  {
    path: 'vendor-newdebit-notes', component:  VendorNewdebitnoteComponent
  },
  {
    path: 'vendor-items-purchasestatments', component:  VendorItemsPurchasestatementComponent
  },
  {
    path: 'vendor-items-recordexpenses', component:  VendorItemsRecordexpenseComponent
  },
  {
    path: 'vendor-newquotations', component:  VendorNewquotationsComponent
  },
  {
    path: 'vendor-items-newdebitnotes', component:  VendorItemsNewdebitnotesComponent
  },
  {
    path: 'vendor-newpurchaseinvoice', component:  VendorPiNewpurchaseinvoiceComponent
  },
  {
    path: 'vendor-items-newpurchaseinvoice', component:  VendorItemsPiNewpurchaseinvoiceComponent
  },
  {
    path: 'vendor-newpurchaseorder', component:  VendorPoNewpurchaseorderComponent
  },
  {
    path: 'vendor-items-newpurchaseorder', component:  VendorItemsPoNewpurchaseorderComponent
  },
  {
    path: 'vendor-newcontracts', component:  VendorContractsNewcontractsComponent
  },
  {
    path: 'vendor-items-newcontracts', component:  VendorItemsContractsNewcontractsComponent
  },
  {
    path: 'vendor-items-newquotations', component:  VendorItemsNewquotationsComponent
  },
  
  
  
  
  
  
  
  
  
  
  
  






  








];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
