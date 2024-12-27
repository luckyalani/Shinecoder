import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NextBtnBudgetComponent } from '../next-btn-budget/next-btn-budget.component';

@Component({
  selector: 'app-next-sec-btn-budget',
  templateUrl: './next-sec-btn-budget.component.html',
  styleUrls: ['./next-sec-btn-budget.component.css']
})
export class NextSecBtnBudgetComponent {
  constructor(public dialog: MatDialog) { }

  Previous(): void {
    const dialogRef = this.dialog.open(NextBtnBudgetComponent, {
      data: {},
    });
  }
}
