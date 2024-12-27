import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketPlaceRoutingModule } from './market-place-routing.module';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { MaterialModule } from '../material/material.module';
import { InstallMarketPlaceComponent } from './install-market-place/install-market-place.component';
import { UninstallComponent } from './uninstall/uninstall.component';
import { ConnectedAppsComponent } from './connected-apps/connected-apps.component';
import { ExtensionDetailComponent } from './extension-detail/extension-detail.component';
import { ContactDeveloperComponent } from './contact-developer/contact-developer.component';
import { InstallationDetailsComponent } from './installation-details/installation-details.component';
import { InstallationDetails2Component } from './installation-details2/installation-details2.component';
import { InstallationDetails3Component } from './installation-details3/installation-details3.component';
import { InstalledComponent } from './installed/installed.component';


@NgModule({
  declarations: [
    MarketPlaceComponent,
    InstallMarketPlaceComponent,
    UninstallComponent,
    ConnectedAppsComponent,
    ExtensionDetailComponent,
    ContactDeveloperComponent,
    InstallationDetailsComponent,
    InstallationDetails2Component,
    InstallationDetails3Component,
    InstalledComponent
  ],
  imports: [
    CommonModule,
    MarketPlaceRoutingModule,
    MaterialModule,
  ]
})
export class MarketPlaceModule {
  
 }
