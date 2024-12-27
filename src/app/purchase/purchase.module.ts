import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseInstallPageComponent } from './purchase-install-page/purchase-install-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { PucrhaseReadmoreComponent } from './pucrhase-readmore/pucrhase-readmore.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from '../home/header/header.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PurchaseReadmorePopupComponent } from './purchase-readmore-popup/purchase-readmore-popup.component';
import { MainpulationPopupComponent } from './mainpulation-popup/mainpulation-popup.component';
import { PurchaseVendorpageComponent } from './purchase-vendorpage/purchase-vendorpage.component';
import { PurchaseVendorTablepageComponent } from './purchase-vendor-tablepage/purchase-vendor-tablepage.component';
import { PurchaseVendorItemsComponent } from './purchase-vendor-items/purchase-vendor-items.component';
import { VendoritemsSIpopupComponent } from './vendoritems-sipopup/vendoritems-sipopup.component';
import { AssignAdminComponent } from './assign-admin/assign-admin.component';
import { PurchaseImportitemPageComponent } from './purchase-importitem-page/purchase-importitem-page.component';
import { PurchaseNewvendorComponent } from './purchase-newvendor/purchase-newvendor.component';
import { PurchaseVendorMultipletabPagesComponent } from './purchase-vendor-multipletab-pages/purchase-vendor-multipletab-pages.component';
import { VendorHeadingComponent } from './vendor-heading/vendor-heading.component';
import { VendorMultipletabContactsComponent } from './vendor-multipletab-contacts/vendor-multipletab-contacts.component';
import { VendorQuotationsComponent } from './vendor-quotations/vendor-quotations.component';
import { VendorPurchaseOrderComponent } from './vendor-purchase-order/vendor-purchase-order.component';
import { VendorPurchaseinvoiceComponent } from './vendor-purchaseinvoice/vendor-purchaseinvoice.component';
import { VendorDebitnotesComponent } from './vendor-debitnotes/vendor-debitnotes.component';
import { VendorPaymentsComponent } from './vendor-payments/vendor-payments.component';
import { VendorExpensesComponent } from './vendor-expenses/vendor-expenses.component';
import { VendorNotesComponent } from './vendor-notes/vendor-notes.component';
import { VendornotePopupComponent } from './vendornote-popup/vendornote-popup.component';
import { VendorAttachmentfilesComponent } from './vendor-attachmentfiles/vendor-attachmentfiles.component';
import { VendorSecondcontactComponent } from './vendor-secondcontact/vendor-secondcontact.component';
import { VendorImportVendorComponent } from './vendor-import-vendor/vendor-import-vendor.component';
import { VendoritemsMultipletabsComponent } from './vendoritems-multipletabs/vendoritems-multipletabs.component';
import { VenoritemsTabsheadingComponent } from './venoritems-tabsheading/venoritems-tabsheading.component';
import { VendorItemsContactsComponent } from './vendor-items-contacts/vendor-items-contacts.component';
import {MatDialogModule} from '@angular/material/dialog';
import { VendorItemsQuotationsComponent } from './vendor-items-quotations/vendor-items-quotations.component';
import { VendorItemsContractsComponent } from './vendor-items-contracts-remove/vendor-items-contracts.component';
import { VendorItemsPurchaseOrderComponent } from './vendor-items-purchase-order/vendor-items-purchase-order.component';
import { VendorItemsPurchaseInvoiceComponent } from './vendor-items-purchase-invoice/vendor-items-purchase-invoice.component';
import { VendorItemsDebitNotesComponent } from './vendor-items-debit-notes/vendor-items-debit-notes.component';
import { VendorItemsPaymentsComponent } from './vendor-items-payments/vendor-items-payments.component';
import { VendorItemsExpensesComponent } from './vendor-items-expenses/vendor-items-expenses.component';
import { VendorItemsNoteComponent } from './vendor-items-note/vendor-items-note.component';
import { VendorItemsAttachmentsFilesComponent } from './vendor-items-attachments-files/vendor-items-attachments-files.component';
import { VendorItemsContactspopupComponent } from './vendor-items-contactspopup/vendor-items-contactspopup.component';
import { VendorItemsContactseditComponent } from './vendor-items-contactsedit/vendor-items-contactsedit.component';
import {MatDividerModule} from '@angular/material/divider';
import { VendorExpensesRecordExpenseComponent } from './vendor-expenses-record-expense/vendor-expenses-record-expense.component';
import { VendorPurchaseStatementComponent } from './vendor-purchase-statement/vendor-purchase-statement.component';
import { VendorNewdebitnoteComponent } from './vendor-newdebitnote/vendor-newdebitnote.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { VendorItemsPurchasestatementComponent } from './vendor-items-purchasestatement/vendor-items-purchasestatement.component';
import { VendorItemsRecordexpenseComponent } from './vendor-items-recordexpense/vendor-items-recordexpense.component';
import { VendorNewquotationsComponent } from './vendor-newquotations/vendor-newquotations.component';
import { VendorConticonEditComponent } from './vendor-conticon-edit/vendor-conticon-edit.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { VendorItemsNewdebitnotesComponent } from './vendor-items-newdebitnotes/vendor-items-newdebitnotes.component';
import { VendorDnPopupComponent } from './vendor-dn-popup/vendor-dn-popup.component';
import { VendorItemsDnPopupComponent } from './vendor-items-dn-popup/vendor-items-dn-popup.component';
import { VendorPiNewpurchaseinvoiceComponent } from './vendor-pi-newpurchaseinvoice/vendor-pi-newpurchaseinvoice.component';
import { PurchaseCommontagComponent } from './purchase-commontag/purchase-commontag.component';
import {MatChipsModule} from '@angular/material/chips';
import { VendorItemsPiNewpurchaseinvoiceComponent } from './vendor-items-pi-newpurchaseinvoice/vendor-items-pi-newpurchaseinvoice.component';
import { VendorPoNewpurchaseorderComponent } from './vendor-po-newpurchaseorder/vendor-po-newpurchaseorder.component';
import { VendorItemsPoNewpurchaseorderComponent } from './vendor-items-po-newpurchaseorder/vendor-items-po-newpurchaseorder.component';
import { VendorContractsNewcontractsComponent } from './vendor-contracts-newcontracts/vendor-contracts-newcontracts.component';
import { VendorItemsContractsNewcontractsComponent } from './vendor-items-contracts-newcontracts/vendor-items-contracts-newcontracts.component';
import { MaterialModule } from '../material/material.module';
import { PurchaseSearchbarComponent } from './purchase-searchbar/purchase-searchbar.component';
import { VendorItemsNewquotationsComponent } from './vendor-items-newquotations/vendor-items-newquotations.component';
import { PurchaseAttachfileComponent } from './purchase-attachfile/purchase-attachfile.component';
import { PurchaseVitemsAttachfilesComponent } from './purchase-vitems-attachfiles/purchase-vitems-attachfiles.component';
import { ItemsNewcustomerPopupComponent } from './items-newcustomer-popup/items-newcustomer-popup.component';
import { ItemsEditPopupComponent } from './items-edit-popup/items-edit-popup.component';
@NgModule({
  declarations: [
    PurchaseInstallPageComponent,
    PucrhaseReadmoreComponent,
    PurchaseReadmorePopupComponent,
    MainpulationPopupComponent,
    PurchaseVendorpageComponent,
    PurchaseVendorTablepageComponent,
    PurchaseVendorItemsComponent,
    VendoritemsSIpopupComponent,
    AssignAdminComponent,
    PurchaseImportitemPageComponent,
    PurchaseNewvendorComponent,
    PurchaseVendorMultipletabPagesComponent,
    VendorHeadingComponent,
    VendorMultipletabContactsComponent,
    VendorQuotationsComponent,
    VendorPurchaseOrderComponent,
    VendorPurchaseinvoiceComponent,
    VendorDebitnotesComponent,
    VendorPaymentsComponent,
    VendorExpensesComponent,
    VendorNotesComponent,
    VendornotePopupComponent,
    VendorAttachmentfilesComponent,
    VendorSecondcontactComponent,
    VendorImportVendorComponent,
    VendoritemsMultipletabsComponent,
    VenoritemsTabsheadingComponent,
    VendorItemsContactsComponent,
    VendorItemsQuotationsComponent,
    VendorItemsContractsComponent,
    VendorItemsPurchaseOrderComponent,
    VendorItemsPurchaseInvoiceComponent,
    VendorItemsDebitNotesComponent,
    VendorItemsPaymentsComponent,
    VendorItemsExpensesComponent,
    VendorItemsNoteComponent,
    VendorItemsAttachmentsFilesComponent,
    VendorItemsContactspopupComponent,
    VendorItemsContactseditComponent,
    VendorExpensesRecordExpenseComponent,
    VendorPurchaseStatementComponent,
    VendorNewdebitnoteComponent,
    VendorItemsPurchasestatementComponent,
    VendorItemsRecordexpenseComponent,
    VendorNewquotationsComponent,
    VendorConticonEditComponent,
    VendorItemsNewdebitnotesComponent,
    VendorDnPopupComponent,
    VendorItemsDnPopupComponent,
    VendorPiNewpurchaseinvoiceComponent,
    PurchaseCommontagComponent,
    VendorItemsPiNewpurchaseinvoiceComponent,
    VendorPoNewpurchaseorderComponent,
    VendorItemsPoNewpurchaseorderComponent,
    VendorContractsNewcontractsComponent,
    VendorItemsContractsNewcontractsComponent,
    PurchaseSearchbarComponent,
    VendorItemsNewquotationsComponent,
    PurchaseAttachfileComponent,
    PurchaseVitemsAttachfilesComponent,
    ItemsNewcustomerPopupComponent,
    ItemsEditPopupComponent,
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
  MaterialModule
  ]
})
export class PurchaseModule {



 }
