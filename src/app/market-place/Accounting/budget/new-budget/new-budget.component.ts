import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditInfoReconsileComponent } from '../../reconcile/start-reconcile/edit-info-reconsile/edit-info-reconsile.component';
import { NextBtnBudgetComponent } from './next-btn-budget/next-btn-budget.component';

@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.css']
})
export class NewBudgetComponent {
  constructor(public dialog: MatDialog) { }

  newopen(): void {
    const dialogRef = this.dialog.open(NextBtnBudgetComponent, {
      data: {},
    });
  }
}
