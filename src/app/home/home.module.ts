import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { SvgIconsComponent } from './svg-icons/svg-icons.component';


@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    SvgIconsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  exports : [
    SidenavComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
