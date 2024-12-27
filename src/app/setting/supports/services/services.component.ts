import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceComponent } from './add-service/add-service.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  openPopup(): void {
    const dialogRef = this.dialog.open(AddServiceComponent, {
      data: {},
      width: '80%'
    });
  }
}
