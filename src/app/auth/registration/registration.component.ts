import { Component } from '@angular/core';
import {  FormGroup, FormsModule} from '@angular/forms'
import { AuthService } from '../auth.service';

import { Router, RouterLink } from '@angular/router';



@Component({
  
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
name = '';
  username = '';
  email = '';
  mobileNo = '';
  password = '';
  confirmPassword = '';
  usersrole = '';

     constructor(private authService: AuthService, private router: Router) {}

  // Dummy register handler
 onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      name: this.name,
      username: this.username,
      email: this.email,
      mobileNo: this.mobileNo,
      password: this.password,
      usertype: this.usersrole
    };

       this.authService.registerUser(userData).subscribe({
      next: (res) => {
        if (res.success) {
          alert("✅ User registered successfully!");
          this.resetForm(); // Optional: Reset after success
        } else {
          alert(" Registration failed: " + res.message);
        }
      },
      error: (err) => {
        alert(" An error occurred during registration.");
        console.error(err);
      }
    });
  }


    resetForm() {
    this.name = '';
    this.username = '';
    this.email = '';
    this.mobileNo = '';
    this.password = '';
    this.confirmPassword = '';
    this.usersrole = '';
  }
  }

