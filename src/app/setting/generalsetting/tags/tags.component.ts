import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  hideTag: boolean = false;
  hideTag2: boolean = false;
  hideTag3: boolean = false;
  hideTag4: boolean = false;
  hideTag5: boolean = false;
  hideTag6: boolean = false;
  hideTag7: boolean = false;

  onClose() {
    this.hideTag = !this.hideTag;
  }

  onClose2() {
    this.hideTag2 = !this.hideTag2;
  }
  onClose3() {
    this.hideTag3 = !this.hideTag3;
  }

  onClose4() {
    this.hideTag4 = !this.hideTag4;
  }
  onClose5() {
    this.hideTag5 = !this.hideTag5;
  }

  onClose6() {
    this.hideTag6 = !this.hideTag6;
  }
  onClose7() {
    this.hideTag7 = !this.hideTag7;
  }
}
