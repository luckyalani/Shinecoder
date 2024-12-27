import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider/slider.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NewSliderComponent } from './new-slider/new-slider.component';


@NgModule({
  declarations: [
    SliderComponent,
    NewSliderComponent
  ],
  imports: [
    CommonModule,
    SliderRoutingModule,
    MaterialModule
  ]
})
export class SliderModule { }
