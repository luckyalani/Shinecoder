import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ZipCreditNotesDialogueComponent } from './zip-credit-notes-dialogue/zip-credit-notes-dialogue.component';

@Component({
  selector: 'app-credit-notes',
  templateUrl: './credit-notes.component.html',
  styleUrls: ['./credit-notes.component.css']
})
export class CreditNotesComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ZipCreditNotesDialogueComponent, {
      
    });
  }

}
