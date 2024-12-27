import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddRoutingComponent } from './add-routing/add-routing.component';

@Component({
  selector: 'app-routing-tab',
  templateUrl: './routing-tab.component.html',
  styleUrls: ['./routing-tab.component.css']
})
export class RoutingTabComponent {
  color = 'primary'
  constructor(public dialog: MatDialog) { }



  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

    });
  }
  openpopup(): void {
    const dialogRef = this.dialog.open(AddRoutingComponent, {
      width: '100%'
    });
  }
}
