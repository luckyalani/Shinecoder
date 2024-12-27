import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  private sharedDataSubject = new BehaviorSubject<any>(null);
  sharedData$ = this.sharedDataSubject.asObservable();
  private drawer: MatDrawer | undefined;
  menuData: any;

  setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  toggleDrawer(): void {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

  setData(menuData: any) {
    this.menuData = menuData 
  }

  updateData(menuData:any){
    this.sharedDataSubject.next(menuData);
  }

  revertData(){
    this.sharedDataSubject.next(this.menuData)
  }
}

