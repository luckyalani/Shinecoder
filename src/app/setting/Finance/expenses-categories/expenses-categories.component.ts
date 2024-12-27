import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { NewCategoryComponent } from './new-category/new-category.component';

@Component({
  selector: 'app-expenses-categories',
  templateUrl: './expenses-categories.component.html',
  styleUrls: ['./expenses-categories.component.css']
})
export class ExpensesCategoriesComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
    });
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(NewCategoryComponent, {
      data: {},
      width: '80%'
    });
  }
}
