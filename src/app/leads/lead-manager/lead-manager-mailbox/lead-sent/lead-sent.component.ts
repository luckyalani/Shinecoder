import { Component } from '@angular/core';

@Component({
  selector: 'app-lead-sent',
  templateUrl: './lead-sent.component.html',
  styleUrls: ['./lead-sent.component.css']
})
export class LeadSentComponent {
main:boolean=true;
toggle1(){
  this.main=!this.main;
}
}
