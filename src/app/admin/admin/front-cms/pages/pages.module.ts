import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CreatePageComponent } from './create-page/create-page.component';


@NgModule({
  declarations: [
    PagesComponent,
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
