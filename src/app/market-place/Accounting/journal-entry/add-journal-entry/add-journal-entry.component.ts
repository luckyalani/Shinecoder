import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-journal-entry',
  templateUrl: './add-journal-entry.component.html',
  styleUrls: ['./add-journal-entry.component.css']
})
export class AddJournalEntryComponent {
  public Editor = ClassicEditor;
}
