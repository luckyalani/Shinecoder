import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media/media.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AddMedia2Component } from './add-media2/add-media2.component';


@NgModule({
  declarations: [
    MediaComponent,
    AddMedia2Component
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
    MaterialModule
  ]
})
export class MediaModule { }
