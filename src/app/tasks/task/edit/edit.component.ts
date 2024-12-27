import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  public Editor = ClassicEditor;

  constructor(public dialog: MatDialog) { }

  closeAll(): void {
    const close = this.dialog.closeAll();
  }
}
