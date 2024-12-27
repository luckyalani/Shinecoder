import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  constructor(public dialog: MatDialog) { }
 
  openPopupDelete(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
}
