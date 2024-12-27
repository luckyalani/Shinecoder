import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaxGroupComponent } from './new-tax-group/new-tax-group.component';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent {
  
  color='primary'
  constructor(public dialog: MatDialog) {}
  openPopup(): void {
    const dialogRef = this.dialog.open(NewTaxGroupComponent, {
      data: {},
      width: '80%'
    });
  }
}
