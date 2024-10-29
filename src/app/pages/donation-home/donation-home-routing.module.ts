import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationHomePage } from './donation-home.page';

const routes: Routes = [
  {
    path: '',
    component: DonationHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationHomePageRoutingModule {}
