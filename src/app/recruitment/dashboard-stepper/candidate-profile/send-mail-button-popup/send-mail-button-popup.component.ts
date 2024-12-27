import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-send-mail-button-popup',
  templateUrl: './send-mail-button-popup.component.html',
  styleUrls: ['./send-mail-button-popup.component.css']
})
export class SendMailButtonPopupComponent {
  public Editor = ClassicEditor;
}
