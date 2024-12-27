import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

// Define the Fruit interface with name and image properties
interface Fruit {
  name: string;
  image: string;
}

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
})
export class GeneralComponent {
  imageHidden: boolean = false;
  onhide() {
    this.imageHidden = !this.imageHidden;
  }

  imageHidden2: boolean = false;
  onhide2() {
    this.imageHidden2 = !this.imageHidden2;
  }

  imageHidden3: boolean = false;
  onhide3() {
    this.imageHidden3 = !this.imageHidden3;
  }
}
