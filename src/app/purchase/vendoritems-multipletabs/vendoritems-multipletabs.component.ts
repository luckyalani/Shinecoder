import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssignAdminComponent } from '../assign-admin/assign-admin.component';


@Component({
  selector: 'app-vendoritems-multipletabs',
  templateUrl: './vendoritems-multipletabs.component.html',
  styleUrls: ['./vendoritems-multipletabs.component.css']
})
export class VendoritemsMultipletabsComponent {

  constructor(public dialog: MatDialog) {}


  assignpopupitems():void{
    const dialogRef = this.dialog.open(AssignAdminComponent, {
      
    });

  }

}
