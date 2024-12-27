import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileSharingRoutingModule } from './file-sharing-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { ManageSharingComponent } from './manage-sharing/manage-sharing.component';
import { ManageDownloadsComponent } from './manage-downloads/manage-downloads.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { MountNetworkVolumeIconPopUpComponent } from './file-manager/mount-network-volume-icon-pop-up/mount-network-volume-icon-pop-up.component';
import { ManageSharingClickEditPopupComponent } from './manage-sharing/manage-sharing-click-edit-popup/manage-sharing-click-edit-popup.component';
import { EditClickMailIconComponent } from './manage-sharing/manage-sharing-click-edit-popup/edit-click-mail-icon/edit-click-mail-icon.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { RouterOutlet } from '@angular/router';
import { ClickEditConfigurationComponent } from './settings/click-edit-configuration/click-edit-configuration.component';
import { ClickAddNewConfigurationComponent } from './settings/click-add-new-configuration/click-add-new-configuration.component';


@NgModule({
  declarations: [

    FileManagerComponent,
    ManageSharingComponent,
    ManageDownloadsComponent,
    ReportsComponent,
    SettingsComponent,
    MountNetworkVolumeIconPopUpComponent,
    ManageSharingClickEditPopupComponent,
    EditClickMailIconComponent,
    ClickEditConfigurationComponent,
    ClickAddNewConfigurationComponent

  ],
  imports: [
    CommonModule,
    FileSharingRoutingModule,
    MaterialModule,


    RouterOutlet,
    CanvasJSAngularChartsModule,
  ]
})
export class FileSharingModule {

}
