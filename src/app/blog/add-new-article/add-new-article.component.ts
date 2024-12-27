import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewGroupPopupComponent } from '../new-group-popup/new-group-popup.component';

@Component({
  selector: 'app-add-new-article',
  templateUrl: './add-new-article.component.html',
  styleUrls: ['./add-new-article.component.css']
})
export class AddNewArticleComponent {
  public Editor = ClassicEditor;
  constructor(public dialog: MatDialog) {}
  
  addnew(): void {
    const dialogRef = this.dialog.open(NewGroupPopupComponent, {
      
    });
    
  }
}
