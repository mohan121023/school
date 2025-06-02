import { Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './Layout/header/header.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { MainContentComponent } from './Layout/main-content/main-content.component';
import { InquiryListComponent } from './Admission/inquiry-list/inquiry-list.component';
import { NewInquiryComponent } from './Admission/new-inquiry/new-inquiry.component';
import { AdmissionDashboardComponent } from './Admission/admission-dashboard/admission-dashboard.component';



export const routes: Routes = [

    {
  path: 'dashboard', component: MainContentComponent,
  
  children: [
    { path: 'homeregistration ', component:RegistrationComponent },
   
  ]
},

    {path: 'registration', component: RegistrationComponent  },
    {path: 'login', component: LoginComponent },


    // Admission Process
    {path: 'admission_dashboard', component:AdmissionDashboardComponent},
    {path: 'inquiry', component:InquiryListComponent},
    {path: 'new_inquiry', component:NewInquiryComponent},

    {path: 'header', component: HeaderComponent},
    {path: 'sidebar',component:SidebarComponent},
    {path: 'main_content', component: MainContentComponent},
    // {path: '',},
    // {path: '',},
    // {path: '',},
    // {path: '',},
];
