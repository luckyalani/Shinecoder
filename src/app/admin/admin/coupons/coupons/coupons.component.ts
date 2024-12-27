import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent {
  constructor(public dialog: MatDialog) {}
  
 
  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }

}
