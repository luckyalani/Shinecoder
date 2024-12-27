import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-work-center',
  templateUrl: './add-work-center.component.html',
  styleUrls: ['./add-work-center.component.css']
})
export class AddWorkCenterComponent {
  title = 'angular';
  public Editor = ClassicEditor;
}
