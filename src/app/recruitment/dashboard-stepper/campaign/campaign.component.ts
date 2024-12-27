import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { ClickAddNewComponent } from './click-add-new/click-add-new.component';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent {
  constructor(public dialog: MatDialog) {}  
  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      
    });
  }
  clickAddNew(): void {
    const dialogRef = this.dialog.open(ClickAddNewComponent, {
      width:'80%'
    });
  }
}
