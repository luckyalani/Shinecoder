import { Component } from '@angular/core';
import { AddDiscoverComponent } from '../add-discover/add-discover.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {
  constructor(public dialog: MatDialog) { }



  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

    });


  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddDiscoverComponent, {

    });


  }

}
