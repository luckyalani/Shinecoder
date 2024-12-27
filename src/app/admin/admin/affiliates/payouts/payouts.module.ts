import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutsRoutingModule } from './payouts-routing.module';
import { PayoutsComponent } from './payouts/payouts.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    PayoutsComponent
  ],
  imports: [
    CommonModule,
    PayoutsRoutingModule,
    MaterialModule
  ]
})
export class PayoutsModule { }
