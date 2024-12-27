import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddBillMaterialComponent } from './add-bill-material/add-bill-material.component';

@Component({
  selector: 'app-bill-materials',
  templateUrl: './bill-materials.component.html',
  styleUrls: ['./bill-materials.component.css']
})
export class BillMaterialsComponent {
  color = 'primary'
  constructor(public dialog: MatDialog) { }



  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

    });
  }
  openPopup(): void {
    const dialogRef = this.dialog.open(AddBillMaterialComponent, {
      data: {},
      width: '100%',
    });
  }
}
