import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
  },
  {
    path: 'manufacturing', loadChildren: () => import('./manufacturing/manufacturing.module').then(m => m.ManufacturingModule)
  },
  {
    path : 'market-place' , loadChildren: ()=> import('./market-place/market-place.module').then(m => m.MarketPlaceModule)
  },
  {
    path : 'blog' , loadChildren: ()=> import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path : 'estimate' , loadChildren: ()=> import('./estimate/estimate.module').then(m => m.EstimateModule)
  },
  {
    path : 'setting' , loadChildren: ()=> import('./setting/setting.module').then(m => m.SettingModule)
  },
  {
    path : 'Contracts' , loadChildren: ()=> import('./contracts/contracts.module').then(m => m.ContractsModule)
  },
  {
    path : 'projects' , loadChildren: ()=> import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path : 'saas-control' , loadChildren: ()=> import('./admin/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
