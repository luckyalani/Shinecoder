import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountSummaryComponent } from './account-summary/account-summary.component';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent {

  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AccountSummaryComponent, {
      
    });
  }

}
