import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  // @Input() name: string;
  selectedDate: any;
  name: string = 'Angular 6';

  onSelect(event: any) {
    console.log(event);
    this.selectedDate = event;
  }
}
