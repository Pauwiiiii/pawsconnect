import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface LoginResponse {
  message: string;
  user?: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page {
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  loginWithEmailPassword() {
    // Check if email and password fields are empty
    if (!this.email) {
      this.emailError = true;
      this.passwordError = false;
      return;
    }
    if (!this.password) {
      this.passwordError = true;
      this.emailError = false;
      return;
    }

    // If fields are filled, proceed with the login
    this.authService.login(this.email, this.password).subscribe(
      (response: LoginResponse) => {
        if (response.message === "Login successful.") {
          console.log('Login successful:', response.user);
          this.router.navigate(['/home']);
          this.emailError = false;
          this.passwordError = false;
        } else {
          this.passwordError = true; // Set error for incorrect password or email
          this.emailError = false;
          console.error('Login failed:', response.message);
        }
      },
      (error: any) => {
        console.error('Error during login:', error);
        this.passwordError = true;
        this.emailError = false;
      }
    );
  }
}
