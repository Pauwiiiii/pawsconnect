
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.page.html',
  styleUrls: ['./accountsettings.page.scss'],
})
export class AccountSettingsPage {
  userName = 'Karina Ano';
  userEmail = 'Karina.ano@example.com';
  isLoggedIn = true;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  navigateToEditProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  navigateToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  navigateToChangePassword() {
    this.navCtrl.navigateForward('/profile');
  }

  signOut() {
    this.authService.logout(); // Call the logout function from AuthService
    this.navCtrl.navigateRoot('/login'); // Redirect to the login page after signing out
  }
}
