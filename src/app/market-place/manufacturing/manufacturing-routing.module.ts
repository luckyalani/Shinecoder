import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { VariantViewComponent } from './product-variant/variant-view/variant-view.component';
import { ProductVariantEditComponent } from './product-variant/product-variant-edit/product-variant-edit.component';
import { ViewBillMaterialComponent } from './bill-materials/view-bill-material/view-bill-material.component';
import { ViewRoutingComponent } from './routing-tab/view-routing/view-routing.component';
import { AddWorkCenterComponent } from './work-center/add-work-center/add-work-center.component';
import { WorkCenterViewComponent } from './work-center/work-center-view/work-center-view.component';
import { AddManufuctringOrderComponent } from './manufucturing-order/add-manufuctring-order/add-manufuctring-order.component';
import { ViewManufuctringOrderComponent } from './manufucturing-order/view-manufuctring-order/view-manufuctring-order.component';
import { ViewWorkOrderComponent } from './work-order/view-work-order/view-work-order.component';
import { AddWorkingHoursComponent } from './setting/working-hour/add-working-hours/add-working-hours.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "add-product", component: AddProductComponent },
  { path: 'view-product', component: ViewProductComponent },

  // Product Variant 
  { path: 'product-variant-view', component: VariantViewComponent },
  { path: 'product-variant-update', component: ProductVariantEditComponent },

  // Bills Of Materials 
  // {path:'bill-material', component:BillMaterialsComponent},
  { path: "view-bill-material", component: ViewBillMaterialComponent },

  // Routing
  { path: 'view-routing', component: ViewRoutingComponent },

  // Work Center
  // {path:'work-center',component:}
  { path: 'add-work-center', component: AddWorkCenterComponent },
  {path:'view-work-center',component:WorkCenterViewComponent},

  // manufuctring-order
  {path:'add-manufuctring-order',component:AddManufuctringOrderComponent},
  {path:'view-manufuctring-order',component:ViewManufuctringOrderComponent},

  // Work Order
  {path:'view-work-order', component:ViewWorkOrderComponent},

  // Settings
  {path:'add-working-hour',component:AddWorkingHoursComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingRoutingModule { }
