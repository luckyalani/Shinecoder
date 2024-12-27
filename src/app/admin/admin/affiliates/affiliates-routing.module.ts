import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliatesSettingsComponent } from './affiliates-settings/affiliates-settings.component';

const routes: Routes = [
  {
    path : 'users' , loadChildren: ()=> import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path : 'payouts' , loadChildren: ()=> import('./payouts/payouts.module').then(m => m.PayoutsModule)
  }, 
  {
    path : 'affiliates-settings', component:AffiliatesSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliatesRoutingModule { }
