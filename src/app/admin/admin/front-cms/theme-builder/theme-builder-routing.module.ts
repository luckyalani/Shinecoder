import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeBuilderComponent } from './theme-builder/theme-builder.component';

const routes: Routes = [
  {
    path: '', component : ThemeBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeBuilderRoutingModule { }
