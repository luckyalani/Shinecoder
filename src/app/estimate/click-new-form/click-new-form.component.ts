import { Component } from '@angular/core';

@Component({
  selector: 'app-click-new-form',
  templateUrl: './click-new-form.component.html',
  styleUrls: ['./click-new-form.component.css']
})
export class ClickNewFormComponent {
check=false;
checked(){
  this.check=!this.check;
}
}
