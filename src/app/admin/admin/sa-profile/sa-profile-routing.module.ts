import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaProfileComponent } from './sa-profile/sa-profile.component';
import { NewSuperAdminComponent } from './new-super-admin/new-super-admin.component';
import { StaffEditProfileComponent } from './staff-edit-profile/staff-edit-profile.component';
import { SaDeleteComponent } from './sa-delete/sa-delete.component';

const routes: Routes = [
  {
    path : '' , component: SaProfileComponent
  },
  {
    path : 'new-super-admin' , component: NewSuperAdminComponent
  },
  {
    path : 'staff-edit-profile' , component: StaffEditProfileComponent
  },
  {
    path : 'sa-delete' , component : SaDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaProfileRoutingModule { }
