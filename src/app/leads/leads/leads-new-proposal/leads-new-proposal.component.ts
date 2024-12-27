import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leads-new-proposal',
  templateUrl: './leads-new-proposal.component.html',
  styleUrls: ['./leads-new-proposal.component.css']
})
export class LeadsNewProposalComponent {

  constructor(dialog:MatDialog){
    dialog.closeAll()
  }

}
