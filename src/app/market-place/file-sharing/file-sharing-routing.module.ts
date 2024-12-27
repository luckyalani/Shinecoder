import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ManageSharingComponent } from './manage-sharing/manage-sharing.component';
import { ManageDownloadsComponent } from './manage-downloads/manage-downloads.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [

  {
    path: 'file-manager', component: FileManagerComponent
  },
  {
    path: 'manage-sharing', component: ManageSharingComponent 
  },
  {
    path: 'manage-downloads', component: ManageDownloadsComponent
  },
  {
    path: 'reports', component: ReportsComponent
  },
  {
    path: 'settings', component: SettingsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileSharingRoutingModule { }
