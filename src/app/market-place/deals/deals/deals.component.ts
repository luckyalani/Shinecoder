import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DealsStepperComponent } from '../deals-stepper/deals-stepper.component';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
constructor(public dialog:MatDialog){}

view=():void=>{
  const v=this.dialog.open(DealsStepperComponent);
}

deleteOpen() {
  const dialogRef = this.dialog.open(DeleteComponent, {});
}

}
