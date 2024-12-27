import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssignAdminComponent } from '../assign-admin/assign-admin.component';


@Component({
  selector: 'app-purchase-vendor-multipletab-pages',
  templateUrl: './purchase-vendor-multipletab-pages.component.html',
  styleUrls: ['./purchase-vendor-multipletab-pages.component.css']
})
export class PurchaseVendorMultipletabPagesComponent {

  constructor(public dialog: MatDialog) {}

  
  assignpopup():void{
    const dialogRef = this.dialog.open(AssignAdminComponent, {
      
    });

  }

}
