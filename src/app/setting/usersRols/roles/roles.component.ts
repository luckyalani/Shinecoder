import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  delete(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
}
