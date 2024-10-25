import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.page.html',
  styleUrls: ['./adopt.page.scss'],
})
export class AdoptPage {
  currentStep: string = 'guide';
  currentQuestionIndex: number = 0;
  totalQuestions: number = 5; // Set the total number of questions
  documentList = [
    { name: 'Proof of residence' },
    { name: 'Proof of occupation' },
    { name: 'Proof of income' },
    { name: 'Proof of crate or cage' },
    { name: 'Proof of collapsible cage' }
  ];

  // Define questions and options for the survey
  questions: Array<{ question: string, options: string[] }> = [
    {
      question: 'Can you commit to providing both dry and wet?',
      options: ['Yes', 'No']
    },
    {
      question: 'Are you capable of offering medical care?',
      options: ['Yes', 'No']
    },
    {
      question: 'Will you be able to provide updates on the pet when requested?',
      options: ['Yes', 'No']
    },
    {
      question: 'Are you open to allowing an ocular inspection of your living space?',
      options: ['Yes', 'No']
    },
    {
      question: 'Will you be present and willing to pay the documentation fee at the barangay?',
      options: ['Yes', 'No']
    },
    {
      question: 'Are you willing to pay for the vaccine?',
      options: ['Yes', 'No']
    },
    {
      question: 'What type of pet are you interested in adopting?',
      options: ['Dog', 'Cat']
    },
    {
      question: 'What size of pet do you prefer?',
      options: ['Small', 'Medium', 'Large']
    },
    {
      question: 'Do you have a preferred age range for your pet?',
      options: ['Puppy/Kitten', 'Adult', 'Senior']
    },
    {
      question: 'Do you prefer a male or female pet?',
      options: ['Male', 'Female']
    },
    {
      question: 'Do you have a preference for your pet’s coat type?',
      options: ['Shortcoat', 'Longcoat', 'No Preference']
    },
    {
      question: 'How often are you willing to groom your pet?',
      options: ['Weekly', 'Monthly', 'As needed']
    },
    {
      question: 'What is your typical work schedule? (e.g., 9am-5pm, night shifts, flexible)',
      options: ['Morning', 'Graveyard', 'Flexible']
    },
    {
      question: 'How many hours will your pet be left alone each day?',
      options: ['1 - 5 hours', '5 hours and above']
    },
    {
      question: 'How often do you travel for work or leisure?',
      options: ['Rarely', 'Occasionally', 'Frequently']
    },
    {
      question: 'Who will take care of your pet when you are away?',
      options: ['No one', 'Family', 'Neighbor']
    },
    {
      question: 'What type of house do you live in?',
      options: ['Owned House', 'Condo', 'Town House', 'Farm House']
    },
    {
      question: 'Do you have outdoor space available for your pet (e.g., backyard, garden)?',
      options: ['Yes', 'No', 'Shared']
    },
    {
      question: 'How would you describe your household activity level?',
      options: ['Low', 'Moderate', 'High']
    },
    {
      question: 'How many people live in your household?',
      options: ['1 only', '1 - 5 person', '5 and above']
    },
    {
      question: 'Do you have children? If yes, what are the ages?',
      options: ['1 - 12 years old', '13 - 19 years old', '19 and above']
    },
    {
      question: 'How often do you engage in physical activities?',
      options: ['Daily', 'Several Times', 'Weekly', 'Rarely']
    },
  ];

  // Adoption requirements
  requirements = [
    'Pet crate',
    'Collapsible cage',
    'Proof of your address',
    'Photo of your residence',
    'Proof of occupation',
    'Ability to provide both dry and wet food for the pet',
    'Capability to offer necessary medical care for the pet',
    'Ability to provide updates',
    'Allow ocular inspection',
    'Willingness to pay the documentation fee at the barangay',
    'Willingness to pay for the pet\'s vaccines',
  ];

  constructor(private navCtrl: NavController) {}

  startAdoption() {
    this.currentStep = 'documents';
  }

  submitSurvey() {
    this.currentStep = 'thank-you'; // Show thank you message
    setTimeout(() => {
      this.goToGuide(); // Navigate back to guide after 6 seconds
    }, 2000);
  }

  nextStep() {
    if (this.currentStep === 'documents') {
      this.currentStep = 'survey';
    }
  }

  prevStep() {
    if (this.currentStep === 'documents') {
      this.currentStep = 'guide';  // Navigate back to guide
    } else if (this.currentStep === 'survey') {
      this.currentStep = 'documents';
    }
  }

  goToGuide() {
    this.currentStep = 'guide';
    this.currentQuestionIndex = 0; // Reset question index when going back to guide
  }

  uploadDocument(docName: string) {
    // Upload document logic
    console.log(`Document ${docName} selected.`);
  }

  cancelAdoption() {
    this.currentStep = 'guide'; // Go back to the guide
  }
}
