import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeedsManagerRemarkComponent } from './leeds-manager-remark/leeds-manager-remark.component';

@Component({
  selector: 'app-lead-manager',
  templateUrl: './lead-manager.component.html',
  styleUrls: ['./lead-manager.component.css']
})
export class LeadManagerComponent {

  constructor(public dialog:MatDialog){ }

  remark():void{
  const rem=this.dialog.open(LeedsManagerRemarkComponent)
  }

}
