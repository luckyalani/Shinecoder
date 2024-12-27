import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemsComponent } from './add-items/add-items.component';
import { EditItemsComponent } from './edit-items/edit-items.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
constructor(public dialog:MatDialog){}
 addNewItem(){
this.dialog.open(AddItemsComponent)
    }

    EditItem(){
this.dialog.open(EditItemsComponent)
    }

    deleteOpen() {
      const dialogRef = this.dialog.open(DeleteComponent, {});
    }
}
