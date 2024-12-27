import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leads-view-new-proposal',
  templateUrl: './leads-view-new-proposal.component.html',
  styleUrls: ['./leads-view-new-proposal.component.css']
})
export class LeadsViewNewProposalComponent {
  constructor(dialog:MatDialog){
    dialog.closeAll();
  }

}
