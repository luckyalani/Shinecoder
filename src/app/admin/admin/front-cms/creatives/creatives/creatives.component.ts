import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { AddCreativesComponent } from '../add-creatives/add-creatives.component';

@Component({
  selector: 'app-creatives',
  templateUrl: './creatives.component.html',
  styleUrls: ['./creatives.component.css']
})
export class CreativesComponent {
  constructor(public dialog: MatDialog) { }



  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

    });


  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddCreativesComponent, {

    });


  }

}
