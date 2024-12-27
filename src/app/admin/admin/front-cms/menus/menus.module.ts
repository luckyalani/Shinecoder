import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus/menus.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddMediaComponent } from './add-media/add-media.component';


@NgModule({
  declarations: [
    MenusComponent,
    AddMenuComponent,
    AddMediaComponent
  ],
  imports: [
    CommonModule,
    MenusRoutingModule,
    MaterialModule
  ]
})
export class MenusModule { }
