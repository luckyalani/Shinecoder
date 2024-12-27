import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractComponent } from './contract/contract.component';
import { MaterialModule } from '../material/material.module';
import { NewContractComponent } from './contract/new-contract/new-contract.component';
import { ContractTabsComponent } from './contract/contract-tabs/contract-tabs.component';
import { SalesModule } from '../sales/sales.module';
import { RenewContractComponent } from './contract/contract-tabs/renew-contract/renew-contract.component';
import { ContractViewComponent } from './contract/contract-view/contract-view.component';
import { SignDialogComponent } from './contract/contract-view/sign-dialog/sign-dialog.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@NgModule({
  declarations: [
    ContractComponent,
    NewContractComponent,
    ContractTabsComponent,
    RenewContractComponent,
    ContractViewComponent,
    SignDialogComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    MaterialModule,
    SalesModule,
    CanvasJSAngularChartsModule,
  ]
})
export class ContractsModule { }
