import { Component } from '@angular/core';
import { RenewContractComponent } from './renew-contract/renew-contract.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contract-tabs',
  templateUrl: './contract-tabs.component.html',
  styleUrls: ['./contract-tabs.component.css']
})
export class ContractTabsComponent {
  constructor(public dialog: MatDialog) { }


  openPopup(): void {
    const dialogRef = this.dialog.open(RenewContractComponent, {

      data: {},
    });
  }

}
