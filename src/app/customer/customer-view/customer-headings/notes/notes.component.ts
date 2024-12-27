import { Component } from '@angular/core';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../../delete/delete.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  constructor(public dialog: MatDialog) {}
  
  editDialog(): void {
    const dialogRef = this.dialog.open(EditNotesComponent, {
      
    });
    
  }
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }

}


