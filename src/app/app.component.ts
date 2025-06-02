import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from "./auth/registration/registration.component";
import { AllFormComponent } from "./all-form/all-form.component";
import { MainContentComponent } from "./Layout/main-content/main-content.component";
import { DashboardComponent } from "./Layout/dashboard/dashboard.component";
import { InquiryListComponent } from './Admission/inquiry-list/inquiry-list.component';
import { NewInquiryComponent } from './Admission/new-inquiry/new-inquiry.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistrationComponent, InquiryListComponent,NewInquiryComponent, 
            AllFormComponent, MainContentComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'School';
}
