import { Component } from '@angular/core';
import { ConnectedAppsComponent } from '../connected-apps/connected-apps.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactDeveloperComponent } from '../contact-developer/contact-developer.component';

@Component({
  selector: 'app-extension-detail',
  templateUrl: './extension-detail.component.html',
  styleUrls: ['./extension-detail.component.css']
})
export class ExtensionDetailComponent {

  constructor(public dialog: MatDialog) {}
  
 
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ConnectedAppsComponent, {
      
    });
  
  }

  contactDialog(): void {
    const dialogRef = this.dialog.open(ContactDeveloperComponent, {
      
    });

    
  }
}




