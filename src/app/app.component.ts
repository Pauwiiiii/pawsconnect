import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public headerTitle: string = ''; // Dynamically updated header title
  unreadNotificationsCount: number = 0; // Track unread notification count

  profile = {
    name: 'Karino Amo',
    email: 'PawsConnect@gmail.com' // Placeholder data; replace with fetched data if needed
  };

  constructor(
    private navCtrl: NavController, 
    private menuCtrl: MenuController, 
    private router: Router
  ) {
    // Listen for navigation events to update the header dynamically
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderTitle(event.url);
      }
    });
  }

  // Update header tittle base on the current URL
  updateHeaderTitle(url: string) {
    if (url.includes('home')) {
      this.headerTitle = 'PawsConnect';
    } else if (url.includes('adopt')) {
      this.headerTitle = 'Adopt Pet';
    } else if (url.includes('donation')) {
      this.headerTitle = 'Donation';
    } else if (url.includes('lost')) {
      this.headerTitle = 'Lost & Found';
    } else if (url.includes('pet')) {
      this.headerTitle = 'Pet Care';
    }else if (url.includes('events')) {
      this.headerTitle = 'Events';
    }else if (url.includes('message')) {
      this.headerTitle = 'Message';
    }else if (url.includes('notification')) {
      this.headerTitle = 'Notification';
    }else if (url.includes('about')) {
      this.headerTitle = 'About Us';
    } else if (url.includes('profile')) {
      this.headerTitle = 'User Profile';
    }else if (url.includes('pet-info')) {
      this.headerTitle = 'Pet Information';
    } else {
      this.headerTitle = 'PawsConnect'; // Default title if no match
    }
  }

  // Navigate to the profile page
  goToProfile() {
    this.navCtrl.navigateRoot('/profile');
  }

   // Navigate to the notification page
   openNotifications() {
    this.navCtrl.navigateRoot('/notification');
  }
  
  // Close the main menu
  closeMenu() {
    this.menuCtrl.close('main-menu');
  }

}
