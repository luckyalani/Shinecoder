import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliatesRoutingModule } from './affiliates-routing.module';
import { AffiliatesSettingsComponent } from './affiliates-settings/affiliates-settings.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    AffiliatesSettingsComponent
  ],
  imports: [
    CommonModule,
    AffiliatesRoutingModule,
    MaterialModule
  ]
})
export class AffiliatesModule { }
