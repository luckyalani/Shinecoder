import { Component } from '@angular/core';
import { ContractInformationComponent } from './contract-information/contract-information.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent {

  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ContractInformationComponent, {
      
    });
  }


}
