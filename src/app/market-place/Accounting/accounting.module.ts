import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingTabsComponent } from './accounting-tabs/accounting-tabs.component';
import { BankingComponent } from './banking/banking.component';
import { BankingRegisterComponent } from './banking/banking-register/banking-register.component';
import { PostedTransactionComponent } from './banking/posted-transaction/posted-transaction.component';
import { ReconcileBackComponent } from './banking/reconcile-back/reconcile-back.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ImportExcelComponent } from './banking/posted-transaction/import-excel/import-excel.component';
import { SetBankAccountComponent } from './banking/posted-transaction/set-bank-account/set-bank-account.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ImportExcelTransactionComponent } from './transactions/import-excel-transaction/import-excel-transaction.component';
import { ManipulationComponent } from './transactions/manipulation/manipulation.component';
import { SalesComponent } from './transactions/sales/sales.component';
import { MappingComponent } from './transactions/sales/mapping/mapping.component';
import { MappingInvoiceComponent } from './transactions/sales/mapping-invoice/mapping-invoice.component';
import { InvoiceIdComponent } from './transactions/sales/invoice-id/invoice-id.component';
import { CommonComponent } from './transactions/sales/invoice-id/common/common.component';
import { InvoiceTabComponent } from './transactions/sales/invoice-id/invoice-tab/invoice-tab.component';
import { PaymentTabComponent } from './transactions/sales/invoice-id/payment-tab/payment-tab.component';
import { TaskTabComponent } from './transactions/sales/invoice-id/task-tab/task-tab.component';
import { ActivityTabComponent } from './transactions/sales/invoice-id/activity-tab/activity-tab.component';
import { ReminderTabComponent } from './transactions/sales/invoice-id/reminder-tab/reminder-tab.component';
import { NotesTabComponent } from './transactions/sales/invoice-id/notes-tab/notes-tab.component';
import { PaymentComponent } from './transactions/sales/invoice-id/invoice-tab/payment/payment.component';
import { ViewBtnComponent } from './transactions/sales/invoice-id/view-btn/view-btn.component';
import { EditBtnComponent } from './transactions/sales/invoice-id/edit-btn/edit-btn.component';
import { SalesModule } from 'src/app/sales/sales.module';
import { CedulaEditComponent } from './transactions/sales/invoice-id/edit-btn/cedula-edit/cedula-edit.component';
import { AddItemsComponent } from './transactions/sales/invoice-id/edit-btn/add-items/add-items.component';
import { NewInvoiceComponent } from './transactions/sales/invoice-id/new-invoice/new-invoice.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { AddJournalEntryComponent } from './journal-entry/add-journal-entry/add-journal-entry.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransferAddComponent } from './transfer/transfer-add/transfer-add.component';
import { ChartOfAccountComponent } from './chart-of-account/chart-of-account.component';
import { AddChartOfAccountComponent } from './chart-of-account/add-chart-of-account/add-chart-of-account.component';
import { ImportChartOfAccountComponent } from './chart-of-account/import-chart-of-account/import-chart-of-account.component';
import { AccountHistoryComponent } from './chart-of-account/account-history/account-history.component';
import { ReconcileComponent } from './reconcile/reconcile.component';
import { StartReconcileComponent } from './reconcile/start-reconcile/start-reconcile.component';
import { EditInfoReconsileComponent } from './reconcile/start-reconcile/edit-info-reconsile/edit-info-reconsile.component';
import { FinishNowReconsileComponent } from './reconcile/start-reconcile/finish-now-reconsile/finish-now-reconsile.component';
import { BudgetComponent } from './budget/budget.component';
import { NewBudgetComponent } from './budget/new-budget/new-budget.component';
import { NextBtnBudgetComponent } from './budget/new-budget/next-btn-budget/next-btn-budget.component';
import { NextSecBtnBudgetComponent } from './budget/new-budget/next-sec-btn-budget/next-sec-btn-budget.component';
import { ImportBudgetComponent } from './budget/import-budget/import-budget.component';
import { ReportsComponent } from './reports/reports.component';
import { GeneralComponent } from './Setting/general/general.component';
import { BankingRulesComponent } from './Setting/banking-rules/banking-rules.component';
import { MappingSetupComponent } from './Setting/mapping-setup/mapping-setup.component';
import { AccountDetailTypeComponent } from './Setting/account-detail-type/account-detail-type.component';
import { PlaidEnvironmentComponent } from './Setting/plaid-environment/plaid-environment.component';
import { AddBankingRulesComponent } from './Setting/banking-rules/add-banking-rules/add-banking-rules.component';
import { GeneralTabComponent } from './Setting/mapping-setup/general-tab/general-tab.component';
import { PayslipsTabComponent } from './Setting/mapping-setup/payslips-tab/payslips-tab.component';
import { PurchaseTabComponent } from './Setting/mapping-setup/purchase-tab/purchase-tab.component';
import { InventoryTabComponent } from './Setting/mapping-setup/inventory-tab/inventory-tab.component';
import { ItemMappingSetupAddComponent } from './Setting/mapping-setup/general-tab/item-mapping-setup-add/item-mapping-setup-add.component';
import { PaymentModeMappingAddComponent } from './Setting/mapping-setup/general-tab/payment-mode-mapping-add/payment-mode-mapping-add.component';
import { ExpensesCategoryAddComponent } from './Setting/mapping-setup/general-tab/expenses-category-add/expenses-category-add.component';
import { TaxMappingAddComponent } from './Setting/mapping-setup/general-tab/tax-mapping-add/tax-mapping-add.component';
import { AddAccountDetailsComponent } from './Setting/account-detail-type/add-account-details/add-account-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AccountingTabsComponent,
    BankingComponent,
    BankingRegisterComponent,
    PostedTransactionComponent,
    ReconcileBackComponent,
    ImportExcelComponent,
    SetBankAccountComponent,
    TransactionsComponent,
    ImportExcelTransactionComponent,
    ManipulationComponent,
    SalesComponent,
    MappingComponent,
    MappingInvoiceComponent,
    InvoiceIdComponent,
    CommonComponent,
    InvoiceTabComponent,
    PaymentTabComponent,
    TaskTabComponent,
    ActivityTabComponent,
    ReminderTabComponent,
    NotesTabComponent,
    PaymentComponent,
    ViewBtnComponent,
    EditBtnComponent,
    CedulaEditComponent,
    AddItemsComponent,
    NewInvoiceComponent,
    JournalEntryComponent,
    AddJournalEntryComponent,
    TransferComponent,
    TransferAddComponent,
    ChartOfAccountComponent,
    AddChartOfAccountComponent,
    ImportChartOfAccountComponent,
    AccountHistoryComponent,
    ReconcileComponent,
    StartReconcileComponent,
    EditInfoReconsileComponent,
    FinishNowReconsileComponent,
    BudgetComponent,
    NewBudgetComponent,
    NextBtnBudgetComponent,
    NextSecBtnBudgetComponent,
    ImportBudgetComponent,
    ReportsComponent,
    GeneralComponent,
    BankingRulesComponent,
    MappingSetupComponent,
    AccountDetailTypeComponent,
    PlaidEnvironmentComponent,
    AddBankingRulesComponent,
    GeneralTabComponent,
    PayslipsTabComponent,
    PurchaseTabComponent,
    InventoryTabComponent,
    ItemMappingSetupAddComponent,
    PaymentModeMappingAddComponent,
    ExpensesCategoryAddComponent,
    TaxMappingAddComponent,
    AddAccountDetailsComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    MaterialModule,
    SalesModule
  ]
})
export class AccountingModule { }
