import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddComponentComponent } from '../add-component/add-component.component';

@Component({
  selector: 'app-view-bill-material',
  templateUrl: './view-bill-material.component.html',
  styleUrls: ['./view-bill-material.component.css']
})
export class ViewBillMaterialComponent {
  color = 'primary'
  constructor(public dialog: MatDialog) { }



  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
    });
  }
  openpopup(): void {
    const dialogRef = this.dialog.open(AddComponentComponent, {
      width: '100%'
    });
  }
}
