import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


interface LoginResponse {
  message: string;
  user?: any; // Use a more specific type if you know the structure of the 'user' object
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Bind these to your input fields in the template
  password: string = ''; 

  constructor(
    private router: Router,
    private authService: AuthService // Inject AuthService
  ) {}

  loginWithEmailPassword() {
    this.authService.login(this.username, this.password).subscribe(
      (response: LoginResponse) => {
        if (response.message === "Login successful.") {
          console.log('Login successful:', response.user);
          // Navigate to the home page upon successful login
          this.router.navigate(['/home']);
        } else {
          console.error('Login failed:', response.message);
          // Optionally, show an error message to the user
        }
      },
      (error: any) => {
        console.error('Error during login:', error);
        // Handle any errors that may occur
      }
    );
  }

  loginWithGoogle() {
    this.router.navigate(['/home']);
  }

  navigateToSignup() {
    this.router.navigate(['/signup']); // Navigate to the signup page
  }

  navigateToLogin2() {
    this.router.navigate(['/login2']); // Navigate to the login2 page
  }
}
