import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBudgetComponent } from '../new-budget.component';
import { NextSecBtnBudgetComponent } from '../next-sec-btn-budget/next-sec-btn-budget.component';

@Component({
  selector: 'app-next-btn-budget',
  templateUrl: './next-btn-budget.component.html',
  styleUrls: ['./next-btn-budget.component.css']
})
export class NextBtnBudgetComponent {
  constructor(public dialog: MatDialog) { }

  Previous(): void {
    const dialogRef = this.dialog.open(NewBudgetComponent, {
      data: {},
    });
  }
  newopen(): void {
    const dialogRef = this.dialog.open(NextSecBtnBudgetComponent, {
      data: {},
    });
  }
}
