import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingTabsComponent } from './accounting-tabs/accounting-tabs.component';
import { combineLatest } from 'rxjs';
import { ImportExcelComponent } from './banking/posted-transaction/import-excel/import-excel.component';
import { SetBankAccountComponent } from './banking/posted-transaction/set-bank-account/set-bank-account.component';
import { ImportExcelTransactionComponent } from './transactions/import-excel-transaction/import-excel-transaction.component';
import { SalesComponent } from './transactions/sales/sales.component';
import { InvoiceIdComponent } from './transactions/sales/invoice-id/invoice-id.component';
import { PaymentComponent } from 'src/app/market-place/Accounting/transactions/sales/invoice-id/invoice-tab/payment/payment.component';
import { ViewBtnComponent } from './transactions/sales/invoice-id/view-btn/view-btn.component';
import { EditBtnComponent } from './transactions/sales/invoice-id/edit-btn/edit-btn.component';
import { CedulaEditComponent } from './transactions/sales/invoice-id/edit-btn/cedula-edit/cedula-edit.component';
import { NewInvoiceComponent } from './transactions/sales/invoice-id/new-invoice/new-invoice.component';
import { AddJournalEntryComponent } from './journal-entry/add-journal-entry/add-journal-entry.component';
import { BankingComponent } from './banking/banking.component';
import { ImportChartOfAccountComponent } from './chart-of-account/import-chart-of-account/import-chart-of-account.component';
import { AccountHistoryComponent } from './chart-of-account/account-history/account-history.component';
import { StartReconcileComponent } from './reconcile/start-reconcile/start-reconcile.component';
import { ImportBudgetComponent } from './budget/import-budget/import-budget.component';
import { GeneralComponent } from './Setting/general/general.component';
import { BankingRulesComponent } from './Setting/banking-rules/banking-rules.component';
import { AccountDetailTypeComponent } from './Setting/account-detail-type/account-detail-type.component';
import { MappingSetupComponent } from './Setting/mapping-setup/mapping-setup.component';
import { PlaidEnvironmentComponent } from './Setting/plaid-environment/plaid-environment.component';
import { AddBankingRulesComponent } from './Setting/banking-rules/add-banking-rules/add-banking-rules.component';

const routes: Routes = [
{path:'',component:AccountingTabsComponent}, 
{path:'banking',component:BankingComponent}, 


// Banking
{path:'import-excel',component:ImportExcelComponent},
{path:'set-up-bank-account',component:SetBankAccountComponent},

// Transactions
{path:'transactions/import-excel-transaction',component:ImportExcelTransactionComponent},
{path:'transactions/sales',component:SalesComponent},
{path:'transactions/sales/invoice',component:InvoiceIdComponent},
{path:'transactions/sales/invoice/payments',component:PaymentComponent},
{path:'transactions/sales/invoice/view',component:ViewBtnComponent},
{path:'transactions/sales/invoice/edit',component:EditBtnComponent},
{path:'transactions/sales/invoice/cedula-edit',component:CedulaEditComponent},
{path:'transactions/sales/new-invoice',component:NewInvoiceComponent},


// Journal Entry
{path:'add-journal-entry',component:AddJournalEntryComponent},

// Chart Of Account
{path:'chart-of-account/import-chart-of-account',component:ImportChartOfAccountComponent},
{path:'chart-of-account/account-history',component:AccountHistoryComponent},

// Reconsile
{path:'reconcile/account-history',component:StartReconcileComponent},

// Budget
{path:'budget/import-budget',component:ImportBudgetComponent},

// Setting
{path:'setting/general',component:GeneralComponent},
{path:'setting/banking-rules',component:BankingRulesComponent},
{path:'setting/add-banking-rules',component:AddBankingRulesComponent},
{path:'setting/account-detail-type',component:AccountDetailTypeComponent},
{path:'setting/mapping-setup',component:MappingSetupComponent},
{path:'setting/plaid-environment',component:PlaidEnvironmentComponent},

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
