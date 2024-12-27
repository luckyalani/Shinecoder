import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeBuilderRoutingModule } from './theme-builder-routing.module';
import { ThemeBuilderComponent } from './theme-builder/theme-builder.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ThemeBuilderComponent
  ],
  imports: [
    CommonModule,
    ThemeBuilderRoutingModule,
    MaterialModule
  ]
})
export class ThemeBuilderModule { }
