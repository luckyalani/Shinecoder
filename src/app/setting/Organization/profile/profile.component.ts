import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCurrencyComponent } from './edit-currency/edit-currency.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  color='primary'
  constructor(public dialog: MatDialog) {}
  openPopup(): void {
    const dialogRef = this.dialog.open(EditCurrencyComponent, {
      data: {},
      width: '80%'
    });
  }

  check=false;
 checked(){
  this.check=!this.check;
}

toggle=false;
changetoggle(){
  this.toggle=!this.toggle;
}

editaddress=false;
changeeditaddress(){
  this.editaddress=!this.editaddress;
}
}
