import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingRoutingModule } from './manufacturing-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './product/product.component';
import { CustomerModule } from '../customer/customer.module';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { ProductVariantComponent } from './product-variant/product-variant.component';
import { VariantViewComponent } from './product-variant/variant-view/variant-view.component';
import { ProductVariantEditComponent } from './product-variant/product-variant-edit/product-variant-edit.component';
import { BillMaterialsComponent } from './bill-materials/bill-materials.component';
import { AddBillMaterialComponent } from './bill-materials/add-bill-material/add-bill-material.component';
import { ViewBillMaterialComponent } from './bill-materials/view-bill-material/view-bill-material.component';
import { AddComponentComponent } from './bill-materials/add-component/add-component.component';
import { RoutingTabComponent } from './routing-tab/routing-tab.component';
import { ViewRoutingComponent } from './routing-tab/view-routing/view-routing.component';
import { AddRoutingComponent } from './routing-tab/add-routing/add-routing.component';
import { AddOperationComponent } from './routing-tab/add-operation/add-operation.component';
import { WorkCenterComponent } from './work-center/work-center.component';
import { AddWorkCenterComponent } from './work-center/add-work-center/add-work-center.component';
import { WorkCenterViewComponent } from './work-center/work-center-view/work-center-view.component';
import { ManufucturingOrderComponent } from './manufucturing-order/manufucturing-order.component';
import { AddManufuctringOrderComponent } from './manufucturing-order/add-manufuctring-order/add-manufuctring-order.component';
import { ViewManufuctringOrderComponent } from './manufucturing-order/view-manufuctring-order/view-manufuctring-order.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { ViewWorkOrderComponent } from './work-order/view-work-order/view-work-order.component';
import { SettingComponent } from './setting/setting.component';
import { WorkingHourComponent } from './setting/working-hour/working-hour.component';
import { UnitsOfMeasureComponent } from './setting/units-of-measure/units-of-measure.component';
import { UnitsOfMeasureCategoriesComponent } from './setting/units-of-measure-categories/units-of-measure-categories.component';
import { GeneralSettingsComponent } from './setting/general-settings/general-settings.component';
import { AddWorkingHoursComponent } from './setting/working-hour/add-working-hours/add-working-hours.component';
import { AddUnitsOfMeasureCategoryComponent } from './setting/units-of-measure-categories/add-units-of-measure-category/add-units-of-measure-category.component';
import { AddUnitsMeasureComponent } from './setting/units-of-measure/add-units-measure/add-units-measure.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    AddProductComponent,
    ViewProductComponent,
    ProductVariantComponent,
    VariantViewComponent,
    ProductVariantEditComponent,
    BillMaterialsComponent,
    AddBillMaterialComponent,
    ViewBillMaterialComponent,
    AddComponentComponent,
    RoutingTabComponent,
    ViewRoutingComponent,
    AddRoutingComponent,
    AddOperationComponent,
    WorkCenterComponent,
    AddWorkCenterComponent,
    WorkCenterViewComponent,
    ManufucturingOrderComponent,
    AddManufuctringOrderComponent,
    ViewManufuctringOrderComponent,
    WorkOrderComponent,
    ViewWorkOrderComponent,
    SettingComponent,
    WorkingHourComponent,
    UnitsOfMeasureComponent,
    UnitsOfMeasureCategoriesComponent,
    GeneralSettingsComponent,
    AddWorkingHoursComponent,
    AddUnitsOfMeasureCategoryComponent,
    AddUnitsMeasureComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule,
    MaterialModule,
    CustomerModule,
    CanvasJSAngularChartsModule,
  ]
})
export class ManufacturingModule { }
