import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { NewExemptionsComponent } from './new-exemptions/new-exemptions.component';
import { BulkCreateExemptionsComponent } from './bulk-create-exemptions/bulk-create-exemptions.component';

@Component({
  selector: 'app-exemptions',
  templateUrl: './exemptions.component.html',
  styleUrls: ['./exemptions.component.css']
})
export class ExemptionsComponent {
  color='primary'
  constructor(public dialog: MatDialog) {}
  openPopup(): void {
    const dialogRef = this.dialog.open(NewExemptionsComponent, {
      data: {},
      width: '80%'
    });
  }
  create(): void {
    const dialogRef = this.dialog.open(BulkCreateExemptionsComponent, {
      data: {},
      width: '80%'
    });
  }
  delete(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
}
