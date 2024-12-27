import { Component } from '@angular/core';
import { AddMenuComponent } from '../add-menu/add-menu.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddMenuComponent, {
      
    });
  }

}
