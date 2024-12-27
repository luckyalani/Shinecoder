import { Component, Input } from '@angular/core';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrls: ['./svg-icons.component.css']
})
export class SvgIconsComponent {
  @Input() iconName: string = '';
  @Input() viewBox: string = '';

  constructor(public IconService : IconService){

  }

  ngOnInit(){
   
  }
}
