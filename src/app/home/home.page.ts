import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FilterPage } from '../pages/filter/filter.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    slideOpts = {
      initialSlide: 0,
      speed: 400,
    };

  pets = [
    { name: 'Tommy', species: 'dog', kind: 'small', age: 7, gender: 'Male', image: 'assets/images/dog1.png' },
    { name: 'Alfred', species: 'cat', kind: 'medium', age: 4, gender: 'Male', image: 'assets/images/cat1.png' },
    { name: 'Motty', species: 'dog', kind: 'large', age: 5, gender: 'Male', image: 'assets/images/dog2.png' },
    { name: 'Cindy', species: 'cat', kind: 'small', age: 9, gender: 'Female', image: 'assets/images/cat2.png' },
    { name: 'Bell', species: 'dog', kind: 'medium', age: 7, gender: 'Male', image: 'assets/images/dog3.png' },
    { name: 'Trexy', species: 'cat', kind: 'large', age: 1, gender: 'Female', image: 'assets/images/cat3.png' }
  ];

  filteredPets = [...this.pets];

  constructor(private modalCtrl: ModalController, private navCtrl: NavController, private router: Router) {}

  async openFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterPage,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 0.75, 1],
      backdropDismiss: true,
      cssClass: 'half-screen-modal',
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data) {
        const filters = dataReturned.data;
        this.applyFilters(filters);
      }
    });

    return await modal.present();
  }

  applyFilters(filters: any) {
    this.filteredPets = this.pets.filter((pet) => {
      const speciesMatch = !filters.species || pet.species === filters.species;
      const genderMatch = !filters.gender || pet.gender.toLowerCase() === filters.gender.toLowerCase();
      const ageMatch = this.matchAgeRange(pet.age, filters.ageRange);
      const kindMatch = !filters.kind || pet.kind === filters.kind;
      return speciesMatch && genderMatch && ageMatch && kindMatch;
    });
  }

  matchAgeRange(age: number, ageRange: string | null): boolean {
    if (!ageRange) return true;
    if (ageRange === '1-12') return age >= 1 && age <= 1;
    if (ageRange === '1-6') return age >= 1 && age <= 6;
    if (ageRange === '7+') return age >= 7;
    return false;
  }

  resetFilters() {
    this.filteredPets = [...this.pets];
  }

  goToProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  goToAdopt() {
    this.navCtrl.navigateRoot('/adopt');
  }

  goToDonation() {
    this.navCtrl.navigateRoot('/donation-home');
  }

  goToLost() {
    this.navCtrl.navigateRoot('/lost');
  }

  goToPetInfo(pet: any) {
    this.router.navigate(['/pet-info', { pet: JSON.stringify(pet) }]);
  }

  goToPetcare() {
    this.navCtrl.navigateForward('/pet');
  }

  goToEvent() {
    this.navCtrl.navigateForward('/events');
  }

  goToAbout() {
    this.navCtrl.navigateForward('/about');
  }
}