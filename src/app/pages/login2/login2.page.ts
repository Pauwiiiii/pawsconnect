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
  showHeader: boolean = false;      // Declare showHeader
  showBottomBar: boolean = false;   // Declare showBottomBar

   // Variables for password visibility
   passwordType: string = 'password';
   passwordIcon: string = 'eye-off';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  // Function to toggle password visibility
  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }

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
  
    // Proceed with the login
    this.authService.login(this.email, this.password).subscribe(
      (response: LoginResponse) => {
        if (response.message === "Login successful.") {
          console.log('Login successful:', response.user);
          this.authService.setLoginState(true); // Set the login state
          this.router.navigate(['/home']);
          this.showHeader = true;
          this.showBottomBar = true;
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
