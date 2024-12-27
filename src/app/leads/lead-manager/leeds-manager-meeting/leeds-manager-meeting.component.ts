import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { LeedsManagerRemarkComponent } from '../leeds-manager-remark/leeds-manager-remark.component';
import { LeedsManagerMeetingDetailComponent } from '../leeds-manager-meeting-detail/leeds-manager-meeting-detail.component';
import { LeadManagerUpdateMeetingDetailsComponent } from '../lead-manager-update-meeting-details/lead-manager-update-meeting-details.component';

@Component({
  selector: 'app-leeds-manager-meeting',
  templateUrl: './leeds-manager-meeting.component.html',
  styleUrls: ['./leeds-manager-meeting.component.css']
})
export class LeedsManagerMeetingComponent {
  constructor(public dialog: MatDialog) {}


  deleteOpen(){
      const dialogRef = this.dialog.open(DeleteComponent, {}); 
    }
    remark():void{
      const rem=this.dialog.open(LeedsManagerRemarkComponent,{ width:"80%" })
      }
    view():void{
      const rem=this.dialog.open(LeedsManagerMeetingDetailComponent,{ width:"80%" })
      }
    meetingDetails():void{
      const rem=this.dialog.open(LeadManagerUpdateMeetingDetailsComponent,{ width:"80%" })
      }

}
