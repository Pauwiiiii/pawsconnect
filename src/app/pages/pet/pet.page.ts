import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.page.html',
  styleUrls: ['./pet.page.scss'],
})
export class PetPage implements OnInit {

  petCareResources = [
    {
      title: 'Basic Dog Care',
      description: 'Everything you need to know about dog care essentials.',
      link: 'https://www.aspca.org/pet-care/dog-care/general-dog-care',
      image: 'https://www.aspca.org/sites/default/files/dog-care_general-dog-care_main-image.jpg',
    },
    {
      title: 'How to Train Your Cat',
      description: 'Tips and tricks to train your feline friend.',
      link: 'https://www.catschool.co/how-to-train-a-cat-the-ultimate-cat-training-guide/',
      image: 'https://www.catschool.co/wp-content/uploads/2023/06/logo-866x1024.png',
    },
    {
      title: 'Best Nutrition for Dogs',
      description: 'Learn the importance of a balanced diet for dogs.',
      link: 'https://www.rspcapetinsurance.org.au/pet-care/dog-care/what-should-feed-dog',
      image: 'https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/58a35a58-4690-4402-aab7-9bd6e64b464b/article-what-should-feed-dog.jpg?auto=format&lossless=1&auto=format&lossless=1',
    },
    {
      title: 'Essential Supplies for Cats & Dogs',
      description: 'Must-have items to ensure your cat\'s and dog\s comfort.',
      link: 'https://www.petexpress.com.ph/blogs/lifestyle/pet-supplies-checklist-6-must-have-pet-essentials',
      image: 'https://www.petexpress.com.ph/cdn/shop/articles/must_have_pet_supplies_1000x.png?v=1710838097',
    },
    {
      title: 'First Aid for Pets',
      description: 'Basic first aid knowledge to keep your pet safe.',
      link: 'https://www.avma.org/resources-tools/pet-owners/emergencycare/first-aid-tips-pet-owners',
      image: 'https://www.avma.org/sites/default/files/2020-07/CMP-Cannabis-HERO-cx-2880x900.webp',
    }
  ];

  constructor() { }

  ngOnInit() { }

  // Function to open the article link in a new tab
  openArticle(link: string) {
    window.open(link, '_blank');
  }
}
