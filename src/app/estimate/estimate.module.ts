import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimateRoutingModule } from './estimate-routing.module';
import { EstimatePageComponent } from './estimate-page/estimate-page.component';
import { ClickNewFormComponent } from './click-new-form/click-new-form.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    EstimatePageComponent,
    ClickNewFormComponent
  ],
  imports: [
    CommonModule,
    EstimateRoutingModule,
    MaterialModule,
    
  ]
})
export class EstimateModule { }
