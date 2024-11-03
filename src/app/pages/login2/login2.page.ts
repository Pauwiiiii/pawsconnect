import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RequestService } from 'src/app/services/request/request.service';
import { environment } from 'src/environments/environment.prod';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { StorageService } from 'src/app/services/storage/storage.service';


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
    private authService: AuthService,
    private requestservice: RequestService,
    private loadingservice: LoadingService, // Define first ins constructor before implement
    private toasterservice: ToastService,
    private storageservice: StorageService,
    private changesdetector: ChangeDetectorRef
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

    /* LOGIN PROCESS */
    // Show login spinner or dialog. - Showing to user that there's process happen.

    // ionic login spinner tip - https://ionicframework.com/docs/api/loading ( i do recommend must be controlled by controller)
    
    this.loadingservice.showLoading("Signing-in"); //  Handle loading from loading service

    let loginUrl = environment.apiRoute + "/login.php";
    this.requestservice.post(loginUrl, {
      email: this.email,
      password: this.password,
      apikey: environment.apiKey     
    }).then((result: any) => {
      this.storageservice.setStorage("name",result.name);
      this.storageservice.setStorage("email",result.email);
      this.storageservice.setStorage("userid",result.userid);
      this.loadingservice.dismiss();
      this.changesdetector.detectChanges();
      this.router.navigate(["home"])
    }).catch((result) => {
      this.loadingservice.dismiss();
      this.toasterservice.presentToast("Authentication Failed", 5000, "top");
      // HANDLE ERROR
      // SHOW DIALOG TO USER
    });

}
}
