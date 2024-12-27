import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusModule } from './menus/menus.module';

const routes: Routes = [
  {
    path : '', loadChildren: ()=> import('./theme-builder/theme-builder.module').then(m => m.ThemeBuilderModule)
  },
  {
    path : 'pages' , loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path : 'menus' , loadChildren: ()=> import('./menus/menus.module').then(m => m.MenusModule)
  },
  {
    path : 'media' , loadChildren: ()=> import('./media/media.module').then(m => m.MediaModule)
  },
  {
    path : 'slider' , loadChildren: ()=> import('./slider/slider.module').then(m => m.SliderModule)
  },
  {
    path : 'blogs' , loadChildren: ()=> import('./blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    path : 'creatives' , loadChildren: ()=> import('./creatives/creatives.module').then(m => m.CreativesModule)
  },
  {
    path : 'discovers' , loadChildren: ()=> import('./discovers/discovers.module').then(m => m.DiscoversModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontCmsRoutingModule { }
