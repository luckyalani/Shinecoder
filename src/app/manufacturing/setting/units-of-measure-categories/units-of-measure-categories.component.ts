import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddUnitsOfMeasureCategoryComponent } from './add-units-of-measure-category/add-units-of-measure-category.component';

@Component({
  selector: 'app-units-of-measure-categories',
  templateUrl: './units-of-measure-categories.component.html',
  styleUrls: ['./units-of-measure-categories.component.css']
})
export class UnitsOfMeasureCategoriesComponent {
  color = 'primary'
  constructor(public dialog: MatDialog) { }



  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

    });
  }
  openPopup(): void {
    const dialogRef = this.dialog.open(AddUnitsOfMeasureCategoryComponent, {
      data: {},
      width: '80%'
    });
  }
}
