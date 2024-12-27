import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-scgedule',
  templateUrl: './add-scgedule.component.html',
  styleUrls: ['./add-scgedule.component.css']
})
export class AddScgeduleComponent {
  public Editor = ClassicEditor;

}
