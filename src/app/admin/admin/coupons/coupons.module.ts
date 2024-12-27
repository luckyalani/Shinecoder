import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { CouponsComponent } from './coupons/coupons.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NewCouponComponent } from './new-coupon/new-coupon.component';


@NgModule({
  declarations: [
    CouponsComponent,
    NewCouponComponent
  ],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    MaterialModule
  ]
})
export class CouponsModule { }
