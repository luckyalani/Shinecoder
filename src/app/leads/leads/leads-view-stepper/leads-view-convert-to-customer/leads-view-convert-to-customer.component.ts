import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-leads-view-convert-to-customer',
  templateUrl: './leads-view-convert-to-customer.component.html',
  styleUrls: ['./leads-view-convert-to-customer.component.css']
})
export class LeadsViewConvertToCustomerComponent {

  constructor(dialog:MatDialog){
    dialog.closeAll();
  }

  password:any;

  showp:boolean= true;
  eyeRef:boolean=true;

  eyeToggle(){
    this.eyeRef=!this.eyeRef;
  }


  ngOnInit() {
    this.password = 'password';
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      // this.show = false;
    } else {
      this.password = 'password';
      // this.show = true;
    }
  }

  
  reset() {
    console.log(this.password.value)
    this.password.value="";
  }

}
