import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.page.html',
  styleUrls: ['./pet-info.page.scss'],
})
export class PetInfoPage implements OnInit {
  pet: { 
    name: string; 
    age: number; 
    gender: string; 
    size: string; 
    story: string; 
    image: string; 
    personalityTraits: Array<{ name: string; value: number }>; 
  };

  medicalHistory: Array<{ label: string; icon: string }>;

  constructor() {
    // Initializing pet data
    this.pet = {
      name: 'Motty',
      age: 8,
      gender: 'Male',
      size: 'Medium',
      story: "Motty's life was a constant struggle for survival as he navigated the harsh streets.",
      image: 'assets/images/tommy.png', // Ensure this path is correct
      personalityTraits: [
        { name: 'Playful', value: 0.9 },
        { name: 'Sociable', value: 0.8 },
        { name: 'Picky Eater', value: 0.5 },
        { name: 'Jolly', value: 0.7 },
        { name: 'Affectionate', value: 0.8 },
        { name: 'Adaptable', value: 0.6 },
        { name: 'Needy', value: 0.4 },
        { name: 'Brave', value: 0.5 },
      ]
    };

    // Initializing medical history data
    this.medicalHistory = [
      { label: 'Vaccines', icon: 'medkit' },
      { label: 'Allergies', icon: 'alert' },
      { label: 'Diseases', icon: 'alert-circle' },
      { label: 'Surgical History', icon: 'cut' },
      { label: 'Medication', icon: 'pills' },
      { label: 'Food', icon: 'restaurant' }
    ];
  }

  ngOnInit() {
    // Any additional initialization logic can go here
  }
}
