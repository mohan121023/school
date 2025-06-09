import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms'; // This is not needed if you are not using ngModel in the template
// all components used in this module should be imported here
import { ProfileComponent } from '../profile/profile.component';
import { SectionChangeComponent } from '../section-change/section-change.component';
import { StatusChangeComponent } from '../status-change/status-change.component';
import { EditableListComponent } from '../editable-list/editable-list.component';
import { RollNoComponent } from '../roll-no/roll-no.component';
import { DocumentsComponent } from '../documents/documents.component';
import { PromotionComponent } from '../promotion/promotion.component';  
import { DemotionComponent } from '../demotion/demotion.component';
import { TCComponent } from '../tc/tc.component';
import { ClassChangeComponent } from '../class-change/class-change.component';




@Component({
  selector: 'app-student-dashboard',
  imports: [ FormsModule ,CommonModule, NgClass,
    // all components used in this module should be imported here
    ProfileComponent, SectionChangeComponent, StatusChangeComponent, EditableListComponent, RollNoComponent, DocumentsComponent, PromotionComponent, DemotionComponent, TCComponent, ClassChangeComponent,
    RouterLink],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent {
  constructor(private router: Router) {}

  selectedComponent: string | null = null;
  selectedBox: any = null;

//   selectComponent(componentName: string ) {
//   this.selectedComponent = componentName;
//   this.selectedBox = this.admissionBoxes.find(b => b.component === componentName);
// }

navigate(route: string) {
    this.router.navigate([route]);
  }
// navigate(path: string) {
//   this.router.navigate([path]);
// }


  // enquiryCount = 25;
  // entranceExamCount = 5;
  // admissionCount = 12;
  // oldAdmissionCount = 7;
  // importCount = 30;
  // reportCount = 4;

  admissionBoxes = [
    { title: 'Profile', icon: 'bi bi-person-circle', bgClass: 'bg-primary', component: 'profile' },
    { title: 'Section Change', icon: 'bi bi-diagram-3', bgClass: 'bg-success', component: 'section-change' },
    { title: 'Status Change', icon: 'bi bi-toggle2-on', bgClass: 'bg-warning', component: 'status-change' },
    { title: 'Editable List', icon: 'bi bi-pencil-square', bgClass: 'bg-danger', component: 'editable-list' },
    { title: 'Roll No', icon: 'bi bi-123', bgClass: 'bg-info', component: 'roll-no' },
    { title: 'Documents', icon: 'bi bi-folder2-open', bgClass: 'bg-secondary', component: 'documents' },
    { title: 'Promotion', icon: 'bi bi-arrow-up-circle', bgClass: 'bg-success', component: 'promotion' },
    { title: 'Demotion', icon: 'bi bi-arrow-down-circle', bgClass: 'bg-warning', component: 'demotion' },
    { title: 'TC', icon: 'bi bi-file-earmark-text', bgClass: 'bg-dark', component: 'tc' },
    { title: 'Class Change', icon: 'bi bi-arrow-left-right', bgClass: 'bg-primary', component: 'class-change' }
  ];
  // admissionBoxes = [
  // {
  //   title: 'Profile',
  //   countText: 'View & Edit',
  //   bgClass: 'bg-primary',
  //   icon: 'bi bi-person-circle',
  //   route: '/profile',
  //   component: 'profile'
  // },
  // {
  //   title: 'Section Change',
  //   countText: 'Update Sections',
  //   bgClass: 'bg-success',
  //   icon: 'bi bi-diagram-3',
  //   route: '/section-change',
  //   component: 'section-change'
  // },
  // {
  //   title: 'Status Change',
  //   countText: 'Active / Inactive',
  //   bgClass: 'bg-warning',
  //   icon: 'bi bi-toggle2-on',
  //   route: '/status-change',
  //   component: 'status-change'
  // },
  // ...and so on for all 10
// ];




// navigate(route: string) {
//   this.router.navigate([route]);
// }
  selectComponent(componentName: string) {
    this.selectedComponent = componentName;
    this.selectedBox = this.admissionBoxes.find(b => b.component === componentName);
  }

  goBack() {
    this.selectedComponent = null;
    this.selectedBox = null;
  }

}



