import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  loginWithEmailPassword() {
    // Add your login logic here
    // Navigate to home or dashboard upon successful login
    this.router.navigate(['/home']);
  }

  loginWithGoogle() {
    // Add your Google login logic here
    // Navigate to home or dashboard upon successful Google login
    this.router.navigate(['/home']);
  }

  navigateToSignup() {
    this.router.navigate(['/signup']); // Navigate to the signup page
  }
}
