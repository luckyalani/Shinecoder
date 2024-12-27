import { Component } from '@angular/core';
import { UninstallComponent } from '../uninstall/uninstall.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-install-market-place',
  templateUrl: './install-market-place.component.html',
  styleUrls: ['./install-market-place.component.css']
})
export class InstallMarketPlaceComponent {
  constructor(public dialog: MatDialog) {}
  
 
  
  openDialog(): void {
    const dialogRef = this.dialog.open(UninstallComponent, {
      
    });
  }

}
