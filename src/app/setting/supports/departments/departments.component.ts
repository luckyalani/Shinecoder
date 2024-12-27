import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { NewDepartmentComponent } from './new-department/new-department.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(NewDepartmentComponent, {
      data: {},
      width: '80%'
    });
  }
}
