import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewGroupPopupComponent } from '../new-group-popup/new-group-popup.component';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent {
  constructor(public dialog: MatDialog) {}
  public Editor = ClassicEditor;
  addnew(): void {
    const dialogRef = this.dialog.open(NewGroupPopupComponent, {
      
    });
    
  }
}
