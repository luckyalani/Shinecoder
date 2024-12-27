import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoversRoutingModule } from './discovers-routing.module';
import { DiscoverComponent } from './discover/discover.component';
import { NewDiscoverComponent } from './new-discover/new-discover.component';
import { AddDiscoverComponent } from './add-discover/add-discover.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    DiscoverComponent,
    NewDiscoverComponent,
    AddDiscoverComponent
  ],
  imports: [
    CommonModule,
    DiscoversRoutingModule,
    MaterialModule
  ]
})
export class DiscoversModule { }
