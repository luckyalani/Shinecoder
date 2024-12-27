import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WonComponent } from '../stepper-details/won/won.component';
import { LostComponent } from '../stepper-details/lost/lost.component';
import { AddNewTaskComponent } from '../stepper-details/add-new-task/add-new-task.component';

@Component({
  selector: 'app-stepper-product',
  templateUrl: './stepper-product.component.html',
  styleUrls: ['./stepper-product.component.css']
})
export class StepperProductComponent {
  constructor(public dialog: MatDialog) { }


  won() {
    const dialogRef = this.dialog.open(WonComponent, {});
  } 
  Lost() {
    const dialogRef = this.dialog.open(LostComponent, {});
  } 
  NewTaks() {
    const dialogRef = this.dialog.open(AddNewTaskComponent, {});
  } 
}
