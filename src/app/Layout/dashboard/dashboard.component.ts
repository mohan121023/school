import { Component, OnInit } from '@angular/core';


import { CommonModule, NgClass, NgStyle } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MainContentComponent } from "../main-content/main-content.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, SidebarComponent, NgClass, NgStyle, RouterOutlet, MainContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  isSidebarVisible = true;
  isMobile = false;

  ngOnInit() {
    this.updateScreenSize();
    window.addEventListener('resize', () => this.updateScreenSize());
  }
  updateScreenSize() {
    this.isMobile = window.innerWidth < 768;
    this.isSidebarVisible = !this.isMobile;
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // for mobile
    if (this.isMobile) {
      this.isSidebarVisible = false; // Hide sidebar on mobile
    } else {
      this.isSidebarVisible = true; // Show sidebar on larger screens
    }
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

 
  }
