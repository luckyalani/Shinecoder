import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBudgetComponent } from './new-budget/new-budget.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  constructor(public dialog: MatDialog) { }

  openPopup(): void {
    const dialogRef = this.dialog.open(NewBudgetComponent, {
      data: {},
    });
  }
  delete(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
}
