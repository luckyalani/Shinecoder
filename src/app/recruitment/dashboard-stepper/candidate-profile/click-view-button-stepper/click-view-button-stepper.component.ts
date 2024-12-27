// import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-click-view-button-stepper',
  templateUrl: './click-view-button-stepper.component.html',
  styleUrls: ['./click-view-button-stepper.component.css'],
})
export class ClickViewButtonStepperComponent {
  @ViewChild(MatMenuTrigger) ddTrigger!: MatMenuTrigger;

}
