import { Component } from '@angular/core';
import { ZipEstimatesDialogueComponent } from './zip-estimates-dialogue/zip-estimates-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ZipEstimatesDialogueComponent, {
      
    });
  }
}
