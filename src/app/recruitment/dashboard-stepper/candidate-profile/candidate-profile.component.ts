import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { SendMailButtonPopupComponent } from './send-mail-button-popup/send-mail-button-popup.component';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent {
  constructor(public dialog: MatDialog) {}  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }
  SendMailButtonPopup(): void {
    const dialogRef = this.dialog.open(SendMailButtonPopupComponent, {
      width:'80%'
    });
  }
  
}
