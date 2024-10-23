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
    birthday: '1990-01-01'
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

  onSignOut() {
    // Implement sign-out logic here
    console.log('User signed out');
  }
}
