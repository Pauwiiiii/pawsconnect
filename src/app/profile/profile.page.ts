import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isEditing: boolean = false;

  userDetails = {
    username: 'itsmedapny',
    firstName: 'Valerie',
    lastName: 'Luna',
    organizationName: 'Start Bootstrap',
    location: 'San Francisco, CA',
    email: 'name@example.com',
    phoneNumber: '555-123-4567',
    birthday: '1990-01-01',
  };

  changePasswordForm = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  constructor() {}

  ngOnInit() {}

  toggleEdit() {
    if (this.isEditing) {
      // Save user details (implement save logic here)
      console.log('User details saved:', this.userDetails);
    }
    this.isEditing = !this.isEditing;
  }

  changePassword() {
    if (this.changePasswordForm.newPassword === this.changePasswordForm.confirmPassword) {
      // Call your password change logic here
      console.log('Password changed successfully:', this.changePasswordForm);
      // Reset the form
      this.changePasswordForm.currentPassword = '';
      this.changePasswordForm.newPassword = '';
      this.changePasswordForm.confirmPassword = '';
    } else {
      console.error('New passwords do not match');
      // Handle password mismatch error
    }
  }

  onSignOut() {
    // Implement sign-out logic here
    console.log('User signed out');
  }
}
