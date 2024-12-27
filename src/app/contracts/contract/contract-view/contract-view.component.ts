import { Component } from '@angular/core';
import { SignDialogComponent } from './sign-dialog/sign-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.css']
})
export class ContractViewComponent {
  constructor(public dialog: MatDialog) {}
  
 
  
  openDialog(): void {
    const dialogRef = this.dialog.open(SignDialogComponent, {
      
    });
  }

}
