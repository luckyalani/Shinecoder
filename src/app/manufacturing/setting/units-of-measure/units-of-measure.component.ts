import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddUnitsMeasureComponent } from './add-units-measure/add-units-measure.component';

@Component({
  selector: 'app-units-of-measure',
  templateUrl: './units-of-measure.component.html',
  styleUrls: ['./units-of-measure.component.css']
})
export class UnitsOfMeasureComponent {
  color = 'primary'
  constructor(public dialog: MatDialog) { }



  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

    });
  }
  openPopup(): void {
    const dialogRef = this.dialog.open(AddUnitsMeasureComponent, {
      data: {},
      width: '100%'
    });
  }
}
