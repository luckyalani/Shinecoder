import { Component } from '@angular/core';
import { AssignAdminDialogueComponent } from '../assign-admin-dialogue/assign-admin-dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AssignAdminDialogueComponent, {
      
    });
  }

}
