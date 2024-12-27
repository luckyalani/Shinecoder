import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-click-templete',
  templateUrl: './click-templete.component.html',
  styleUrls: ['./click-templete.component.css']
})
export class ClickTempleteComponent {
  public Editor = ClassicEditor;
}
