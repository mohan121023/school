import { Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './Layout/header/header.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { MainContentComponent } from './Layout/main-content/main-content.component';
import { InquiryListComponent } from './Admission/inquiry-list/inquiry-list.component';
import { NewInquiryComponent } from './Admission/new-inquiry/new-inquiry.component';
import { AdmissionDashboardComponent } from './Admission/admission-dashboard/admission-dashboard.component';
import { StudentDashboardComponent } from './Student/student-dashboard/student-dashboard.component';
import { ProfileComponent } from './Student/profile/profile.component';
import { SectionChangeComponent } from './Student/section-change/section-change.component';
import { StatusChangeComponent } from './Student/status-change/status-change.component';
import { RollNoComponent } from './Student/roll-no/roll-no.component';
import { DocumentsComponent } from './Student/documents/documents.component';
import { PromotionComponent } from './Student/promotion/promotion.component';
import { DemotionComponent } from './Student/demotion/demotion.component';
import { TCComponent } from './Student/tc/tc.component';
import { ClassChangeComponent } from './Student/class-change/class-change.component';
import { EditableListComponent } from './Student/editable-list/editable-list.component';



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
    {path: 'admission_dashboard', component: AdmissionDashboardComponent},
    {path: 'inquiry', component: InquiryListComponent},
    {path: 'new_inquiry', component: NewInquiryComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'sidebar',component:SidebarComponent},
    {path: 'main_content', component: MainContentComponent},    
    
    // Student Dashboard
    {path: 'student_dashboard', component: StudentDashboardComponent},
    
    {path: 'profile', component: ProfileComponent},
    {path: 'Section_Change', component: SectionChangeComponent},
    {path: 'Status_Change', component: StatusChangeComponent},
    {path: 'editable_list',component: EditableListComponent},
    {path: 'Roll_No', component: RollNoComponent},
    {path: 'Documents', component: DocumentsComponent},
    {path: 'Promotion', component: PromotionComponent},
    {path: 'Demotion', component: DemotionComponent}, // Assuming Demotion uses the same component as Promotion
    {path: 'TC', component: TCComponent},
    {path: 'Class_Change', component: ClassChangeComponent}
   
];
