import { Component, Output, EventEmitter  } from '@angular/core';
import { AuthService } from '../../auth/auth.service'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Output() toggleSidebar = new EventEmitter<void>();

  
  constructor() {}
    
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
