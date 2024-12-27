import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { HomeComponent } from '../manufacturing/home/home.component';
import { InstallMarketPlaceComponent } from './install-market-place/install-market-place.component';
import { UninstallComponent } from './uninstall/uninstall.component';
import { ConnectedAppsComponent } from './connected-apps/connected-apps.component';
import { ExtensionDetailComponent } from './extension-detail/extension-detail.component';
import { ContactDeveloperComponent } from './contact-developer/contact-developer.component';
import { InstallationDetailsComponent } from './installation-details/installation-details.component';
import { InstallationDetails2Component } from './installation-details2/installation-details2.component';
import { InstallationDetails3Component } from './installation-details3/installation-details3.component';
import { InstalledComponent } from './installed/installed.component';

const routes: Routes = [
  {
    path: '', component: MarketPlaceComponent
  },
  { 
    path: 'manufacturing', component: HomeComponent 
  },
  {
    path: 'install-market-place', component: InstallMarketPlaceComponent
  },
  {
    path: 'uninstall' , component : UninstallComponent
  },
  {
    path: 'connected-apps' , component : ConnectedAppsComponent
  },
  {
    path: 'extension-detail' , component : ExtensionDetailComponent
  },
  {
    path: 'contact-developer' , component : ContactDeveloperComponent
  },
  {
    path: 'installation-details' , component : InstallationDetailsComponent
  },
  {
    path: 'installation-details2' , component : InstallationDetails2Component
  },
  {
    path: 'installation-details3' , component : InstallationDetails3Component
  },
  {
    path: 'installed' , component : InstalledComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketPlaceRoutingModule { }
