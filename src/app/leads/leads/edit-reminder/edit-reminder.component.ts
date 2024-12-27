import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetProposalReminderComponent } from '../set-proposal-reminder/set-proposal-reminder.component';

@Component({
  selector: 'app-edit-reminder',
  templateUrl: './edit-reminder.component.html',
  styleUrls: ['./edit-reminder.component.css']
})
export class EditReminderComponent {
constructor(public dialog:MatDialog){

}

setproposal():void{
  this.dialog.open(SetProposalReminderComponent,{width:'100%'})

}

}
