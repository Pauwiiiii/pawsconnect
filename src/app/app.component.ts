import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavController, MenuController, IonTabs } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  public headerTitle: string = ''; // Dynamic na header title
  unreadNotificationsCount: number = 0; // Counter para sa unread notifications
  @ViewChild(IonTabs) tabRef!: IonTabs;
  public homeTabClass: string = '';
  showHeader: boolean = true; // Control para sa visibility ng header
  showBottomBar: boolean = true; // Control para sa visibility ng bottom bar

  profile = {
    name: 'Karino Amo',
    email: 'PawsConnect@gmail.com' // Placeholder na data; palitan ng fetched data kung kailangan
  };

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private router: Router,
  ) {
    // Nakikinig sa navigation events para i-update ang header at bottom bar
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderTitle(event.url);
      }
    });
  }

  async ngAfterViewInit() {
    if (this.router.url == '/') {
      this.tabRef.select('home');
      this.homeTabClass = 'activated';
    }
  }

  async ionTabChange() {
    if (this.tabRef.getSelected() != 'home') {
      this.homeTabClass = '';
    }
  }

  // Dynamic na pag-update ng header title at bottom bar visibility
  updateHeaderTitle(url: string) {
    // I-hide ang header at bottom bar sa specific na pages
    if (url.includes('login') || url.includes('signup') || url.includes('register') || url.includes('forgot-password')) {
      this.showHeader = false;
      this.showBottomBar = false; // Itago ang bottom bar
      this.showHeader = false;
      this.headerTitle = ''; // Clear ang title
      return;
    } else {
      this.showBottomBar = true; // Ipakita ang bottom bar sa ibang pages
    }

    // Mag-set ng header title depende sa page
    if (url.includes('homes')) {
      this.headerTitle = 'PawsConnect';
    } else if (url.includes('adopt')) {
      this.headerTitle = 'Adopt Pet';
    } else if (url.includes('donation') || url.includes('donation-home')) {
      this.headerTitle = 'Donation';
    } else if (url.includes('lost')) {
      this.headerTitle = 'Lost & Found';
    } else if (url.includes('pet')) {
      this.headerTitle = 'Pet Care';
    } else if (url.includes('events')) {
      this.headerTitle = 'Events';
    } else if (url.includes('message')) {
      this.headerTitle = 'Message';
    } else if (url.includes('notification')) {
      this.headerTitle = 'Notification';
    } else if (url.includes('faq')) {
      this.headerTitle = 'FAQs';
    } else if (url.includes('about')) {
      this.headerTitle = 'About Us';
    } else if (url.includes('profile')) {
      this.headerTitle = 'User Profile';
    } else if (url.includes('pet-info')) {
      this.headerTitle = 'Pet Information';
    } else if (url.includes('accountsettings')) {
      this.headerTitle = 'Account Settings';
    } else {
      this.headerTitle = ''; // Default title kung walang match
    }
  }

  // Navigate sa profile page
  goToProfile() {
    this.navCtrl.navigateRoot('/profile');
  }

  // Navigate sa notification page
  openNotifications() {
    this.navCtrl.navigateRoot('/notification');
  }

  // Close ang main menu
  closeMenu() {
    this.menuCtrl.close('main-menu');
  }
}
