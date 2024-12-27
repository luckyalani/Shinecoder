import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { NewBlogDialogComponent } from '../new-blog-dialog/new-blog-dialog.component';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  constructor(public dialog: MatDialog) { }



  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {

    });


  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NewBlogDialogComponent, {

    });


  }
}
