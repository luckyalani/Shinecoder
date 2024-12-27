import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreativesRoutingModule } from './creatives-routing.module';
import { CreativesComponent } from './creatives/creatives.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AddCreativesComponent } from './add-creatives/add-creatives.component';
import { NewCreativeComponent } from './new-creative/new-creative.component';
import { AddDiscoverComponent } from './add-discover/add-discover.component';


@NgModule({
  declarations: [
    CreativesComponent,
    AddCreativesComponent,
    NewCreativeComponent,
    AddDiscoverComponent
  ],
  imports: [
    CommonModule,
    CreativesRoutingModule,
    MaterialModule
  ]
})
export class CreativesModule { }
