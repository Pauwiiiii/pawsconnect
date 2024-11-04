import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {
  selectedSegment: string = 'cash'; // Default to 'cash' segment
  firstname: string = '';
  lastname: string = '';
  phone: string = '';
  email: string = '';
  orgname: string = '';
  referenceNumber: string = '';
  wantAcknowledgment: boolean = false;

  shelterNeeds: string[] = [
    'Dog food',
    'Cat food',
    'Cleaning supplies',
    'Bedding materials',
    'Toys for pets',
    'Veterinary supplies'
  ];

  constructor() {}

  ngOnInit() {}

  submitCashDonation() {
    if (!this.referenceNumber) {
      alert('Please provide a reference number.');
      return;
    }
    
    alert('Cash donation submitted successfully!');
    // Optionally, reset the form after submission
    this.referenceNumber = '';
    this.wantAcknowledgment = false;
  }
  
}
