import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-leads-new-tasks',
  templateUrl: './leads-new-tasks.component.html',
  styleUrls: ['./leads-new-tasks.component.css']
})
export class LeadsNewTasksComponent {
  public Editor = ClassicEditor;
  // dialog: any;

  constructor(public dialog: MatDialog) { }

  closeAll(): void {
    const close = this.dialog.closeAll();
    console.log("constructor mai")
  }





}
