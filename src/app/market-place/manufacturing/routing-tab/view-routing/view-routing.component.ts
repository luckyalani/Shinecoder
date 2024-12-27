import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOperationComponent } from '../add-operation/add-operation.component';

@Component({
  selector: 'app-view-routing',
  templateUrl: './view-routing.component.html',
  styleUrls: ['./view-routing.component.css']
})
export class ViewRoutingComponent {
  color = 'primary'
  constructor(public dialog: MatDialog) { }

  openpopup(): void {
    const dialogRef = this.dialog.open(AddOperationComponent, {
      width: '100%'
    });
  }
}
