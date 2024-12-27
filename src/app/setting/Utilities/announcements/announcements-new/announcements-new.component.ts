import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-announcements-new',
  templateUrl: './announcements-new.component.html',
  styleUrls: ['./announcements-new.component.css']
})
export class AnnouncementsNewComponent {
public Editor=ClassicEditor;
}
