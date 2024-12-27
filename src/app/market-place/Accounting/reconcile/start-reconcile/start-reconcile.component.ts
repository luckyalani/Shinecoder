import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditInfoReconsileComponent } from './edit-info-reconsile/edit-info-reconsile.component';
import { FinishNowReconsileComponent } from './finish-now-reconsile/finish-now-reconsile.component';

@Component({
  selector: 'app-start-reconcile',
  templateUrl: './start-reconcile.component.html',
  styleUrls: ['./start-reconcile.component.css']
})
export class StartReconcileComponent {
  constructor(public dialog: MatDialog) { }

  openPopup(): void {
    const dialogRef = this.dialog.open(EditInfoReconsileComponent, {
      data: {},
      width:'80%'
    });
  }
  finish(): void {
    const dialogRef = this.dialog.open(FinishNowReconsileComponent, {
      data: {},
      width:'80%'
    });
  }
}
