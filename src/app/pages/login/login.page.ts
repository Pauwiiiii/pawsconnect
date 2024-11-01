import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  navigateToSignup() {
    this.router.navigate(['/signup']); // Navigate to the signup page
  }

  navigateToLogin2() {
    this.router.navigate(['/login2']); // Navigate to the signup page
  }
}
