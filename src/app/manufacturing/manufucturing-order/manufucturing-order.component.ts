import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-manufucturing-order',
  templateUrl: './manufucturing-order.component.html',
  styleUrls: ['./manufucturing-order.component.css']
})
export class ManufucturingOrderComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  
 
  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }
}
