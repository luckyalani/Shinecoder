import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaProfileRoutingModule } from './sa-profile-routing.module';
import { SaProfileComponent } from './sa-profile/sa-profile.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NewSuperAdminComponent } from './new-super-admin/new-super-admin.component';
import { StaffEditProfileComponent } from './staff-edit-profile/staff-edit-profile.component';
import { SaDeleteComponent } from './sa-delete/sa-delete.component';


@NgModule({
  declarations: [
    SaProfileComponent,
    NewSuperAdminComponent,
    StaffEditProfileComponent,
    SaDeleteComponent
  ],
  imports: [
    CommonModule,
    SaProfileRoutingModule,
    MaterialModule
  ]
})
export class SaProfileModule { }
