import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriberRoutingModule } from './subscriber-routing.module';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    SubscriberComponent
  ],
  imports: [
    CommonModule,
    SubscriberRoutingModule,
    MaterialModule
  ]
})
export class SubscriberModule { }
