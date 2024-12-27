import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UninstallComponent } from 'src/app/market-place/uninstall/uninstall.component';

@Component({
  selector: 'app-deals-install',
  templateUrl: './deals-install.component.html',
  styleUrls: ['./deals-install.component.css']
})
export class DealsInstallComponent {
  constructor(public dialog: MatDialog) {}
  
 
  
  openDialog(): void {
    const dialogRef = this.dialog.open(UninstallComponent, {
      
    });
  }
}
