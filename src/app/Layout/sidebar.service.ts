import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }
private sidebarVisible = new BehaviorSubject<boolean>(false);
  sidebarVisible$ = this.sidebarVisible.asObservable();

  togglesSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.getValue());
  }
    closeSidebar()
    {
      this.sidebarVisible.next(false);
    }


    isOpen = {
      admissionMenu: false, admissionSubmenu:false,reportSubmenu:false
    };
    toggleMenu(menu:keyof typeof this.isOpen)
    
    {
      this.isOpen[menu] = !this.isOpen[menu];


    }

}
