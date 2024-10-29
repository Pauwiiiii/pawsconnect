import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-home',
  templateUrl: './donation-home.page.html',
  styleUrls: ['./donation-home.page.scss'],
})
export class DonationHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDonate() {
    this.router.navigate(['/donation']);
  }
}
