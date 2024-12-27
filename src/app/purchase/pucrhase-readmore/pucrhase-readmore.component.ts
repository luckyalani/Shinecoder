import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
import { purchasemenu } from 'src/app/shared/menu-data';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseReadmorePopupComponent } from '../purchase-readmore-popup/purchase-readmore-popup.component';
import { MainpulationPopupComponent } from '../mainpulation-popup/mainpulation-popup.component';
import { ItemsNewcustomerPopupComponent } from '../items-newcustomer-popup/items-newcustomer-popup.component';
import { ItemsEditPopupComponent } from '../items-edit-popup/items-edit-popup.component';


@Component({
  selector: 'app-pucrhase-readmore',
  templateUrl: './pucrhase-readmore.component.html',
  styleUrls: ['./pucrhase-readmore.component.css']
})
export class PucrhaseReadmoreComponent {

  show:boolean=false;

  // update value to true by function (view button functionality)

  viewshow(){

    this.show=true;
  }

  constructor(private SidebarService: SidebarService,public dialog: MatDialog){
    this.SidebarService.updateData(purchasemenu)
  }


    color='primary'

    deleteDialogpurchase(): void {
      const dialogRef = this.dialog.open(PurchaseReadmorePopupComponent, {
        
      });
    }
  
    
    mainupulationpopup(): void {
      const dialogRef = this.dialog.open(MainpulationPopupComponent, {
        
      });
    }

    newcustomer():void{
      const dialogRef = this.dialog.open(ItemsNewcustomerPopupComponent, {
        
      });

    }
    editpopup():void{
      const dialogRef = this.dialog.open(ItemsEditPopupComponent, {
        
      });

    }
  
 
  


}
