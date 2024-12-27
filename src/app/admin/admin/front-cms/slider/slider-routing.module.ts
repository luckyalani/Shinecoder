import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { NewSliderComponent } from './new-slider/new-slider.component';

const routes: Routes = [
  {
    path: '' , component: SliderComponent
  },
  {
    path: 'new-slider' , component: NewSliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule { }
