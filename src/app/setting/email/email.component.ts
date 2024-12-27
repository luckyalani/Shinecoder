import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  ischeck = true;
  check() {
    this.ischeck = !this.ischeck;
  }
}
