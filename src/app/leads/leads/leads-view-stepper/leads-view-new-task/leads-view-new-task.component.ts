import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-leads-view-new-task',
  templateUrl: './leads-view-new-task.component.html',
  styleUrls: ['./leads-view-new-task.component.css']
})
export class LeadsViewNewTaskComponent {

  public Editor = ClassicEditor;
  // dialog: any;

  constructor(public dialog:MatDialog){}
  
  closeAll():void{
      const close=this.dialog.closeAll();
        console.log("constructor mai")
  }

}
