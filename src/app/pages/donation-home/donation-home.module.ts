import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationHomePageRoutingModule } from './donation-home-routing.module';

import { DonationHomePage } from './donation-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationHomePageRoutingModule
  ],
  declarations: [DonationHomePage]
})
export class DonationHomePageModule {}
