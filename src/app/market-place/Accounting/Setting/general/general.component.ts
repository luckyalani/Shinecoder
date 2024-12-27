import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
color='primary';
books=false;
account=false;
constructor(public dialog: MatDialog) { }
deleteDialog(): void {
  const dialogRef = this.dialog.open(DeleteComponent, {

    data: {},
  });
}
}
