import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-routing',
  templateUrl: './add-routing.component.html',
  styleUrls: ['./add-routing.component.css']
})
export class AddRoutingComponent {
  title = 'angular';
  public Editor = ClassicEditor;
}
