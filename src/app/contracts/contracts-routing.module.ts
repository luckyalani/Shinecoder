import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './contract/contract.component';
import { NewContractComponent } from './contract/new-contract/new-contract.component';
import { ContractTabsComponent } from './contract/contract-tabs/contract-tabs.component';
import { RenewContractComponent } from './contract/contract-tabs/renew-contract/renew-contract.component';
import { ContractViewComponent } from './contract/contract-view/contract-view.component';
import { SignDialogComponent } from './contract/contract-view/sign-dialog/sign-dialog.component';

const routes: Routes = [
  {
    path : '' , component : ContractComponent
  },
  {
    path : 'new-contract' , component : NewContractComponent
  },
  {
    path : 'contract-tabs' , component : ContractTabsComponent
  },
  {
    path : 'renew-contract' , component : RenewContractComponent
  },
  {
    path : 'contract-view' , component : ContractViewComponent
  },
  {
    path : 'sign-dialog' , component : SignDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
