import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VendoritemsSIpopupComponent } from '../vendoritems-sipopup/vendoritems-sipopup.component';
import { AssignAdminComponent } from '../assign-admin/assign-admin.component';


@Component({
  selector: 'app-purchase-vendor-items',
  templateUrl: './purchase-vendor-items.component.html',
  styleUrls: ['./purchase-vendor-items.component.css']
})
export class PurchaseVendorItemsComponent {

  color='primary'

  constructor(public dialog: MatDialog) {}

  vendorsipopup(): void {
    const dialogRef = this.dialog.open(VendoritemsSIpopupComponent, {
      
    });
  }



}
