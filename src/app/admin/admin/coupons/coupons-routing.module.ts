import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './coupons/coupons.component';
import { NewCouponComponent } from './new-coupon/new-coupon.component';

const routes: Routes = [
  {
    path : '' , component: CouponsComponent
  },
  {
    path : 'new-coupon' , component: NewCouponComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponsRoutingModule { }
