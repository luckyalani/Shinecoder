import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewGroupPopupComponent } from '../new-group-popup/new-group-popup.component';
import { BlogClickGbEditbtnpopupComponent } from '../blog-click-gb-editbtnpopup/blog-click-gb-editbtnpopup.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-blog-groupbtn-page',
  templateUrl: './blog-groupbtn-page.component.html',
  styleUrls: ['./blog-groupbtn-page.component.css']
})
export class BlogGroupbtnPageComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  addnew(): void {
    const dialogRef = this.dialog.open(NewGroupPopupComponent, {
      
    });
    
  }
  editpopup(): void {
    const dialogRef = this.dialog.open(BlogClickGbEditbtnpopupComponent, {
      width:'100%'
    });
    
  }
  openPopupDelete(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  
  }
}
