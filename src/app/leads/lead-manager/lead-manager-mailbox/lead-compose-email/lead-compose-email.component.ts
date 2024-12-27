import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-lead-compose-email',
  templateUrl: './lead-compose-email.component.html',
  styleUrls: ['./lead-compose-email.component.css']
})
export class LeadComposeEmailComponent {
  public Editor = ClassicEditor;

}
