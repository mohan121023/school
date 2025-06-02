import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-admission-dashboard',
  imports: [RouterLink],
  templateUrl: './admission-dashboard.component.html',
  styleUrl: './admission-dashboard.component.css'
})
export class AdmissionDashboardComponent {
  constructor(private router: Router) {}

  enquiryCount = 56;
  entranceExamCount = 10;
  admissionCount = 45;
  oldAdmissionCount = 120;
  importCount = 5;
  reportCount = 8;

  navigate(path: string) {
    this.router.navigate([path]);
  }

activeTab: string = 'inquiry';

  ngOnInit(): void {
    const savedTab = localStorage.getItem('activeAdmissionTab');
    if (savedTab) {
      this.activeTab = savedTab;
    }
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
    localStorage.setItem('activeAdmissionTab', tabId);
  }
}
