import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-general-details-popup',
  templateUrl: './general-details-popup.component.html',
  styleUrls: ['./general-details-popup.component.css']
})
export class GeneralDetailsPopupComponent {
  public Editor = ClassicEditor;
}
