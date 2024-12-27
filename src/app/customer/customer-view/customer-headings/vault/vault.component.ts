import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VaultEntryComponent } from './vault-entry/vault-entry.component';

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent {
 
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(VaultEntryComponent, {
      
    });
  }
}


