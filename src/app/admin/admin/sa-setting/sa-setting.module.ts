import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaSettingRoutingModule } from './sa-setting-routing.module';
import { SettingComponent } from './setting/setting.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SaSettingRoutingModule,
    MaterialModule
  ]
})
export class SaSettingModule { }
