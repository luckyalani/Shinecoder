import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { GeneralDetailsPopupComponent } from './general-details-popup/general-details-popup.component';
import { CandidateRequirementsPopupComponent } from './candidate-requirements-popup/candidate-requirements-popup.component';

@Component({
  selector: 'app-campaign-click-view',
  templateUrl: './campaign-click-view.component.html',
  styleUrls: ['./campaign-click-view.component.css']
})
export class CampaignClickViewComponent {
  constructor(public dialog: MatDialog) {}  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }
  GeneralDetailsPopup(): void {
    const dialogRef = this.dialog.open(GeneralDetailsPopupComponent, {
      width: '80%'
    });
  }
  CandidateRequirementsPopup(): void {
    const dialogRef = this.dialog.open(CandidateRequirementsPopupComponent, {
      width: '80%'
    });
  }
}
