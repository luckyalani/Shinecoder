import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';

const routes: Routes = [
  {
    path : '', component:UsersComponent
  },
  {
    path : 'users-detail' , component: UsersDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
