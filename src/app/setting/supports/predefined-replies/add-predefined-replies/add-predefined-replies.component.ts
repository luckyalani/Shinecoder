import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-predefined-replies',
  templateUrl: './add-predefined-replies.component.html',
  styleUrls: ['./add-predefined-replies.component.css']
})
export class AddPredefinedRepliesComponent {
  public Editor = ClassicEditor;
}
