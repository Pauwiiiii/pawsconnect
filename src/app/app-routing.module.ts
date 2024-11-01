import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'adopt',
    loadChildren: () => import('./pages/adopt/adopt.module').then(m => m.AdoptPageModule)
  },
  {
    path: 'donation',
    loadChildren: () => import('./pages/donation/donation.module').then(m => m.DonationPageModule)
  },
  {
    path: 'lost',
    loadChildren: () => import('./pages/lost/lost.module').then(m => m.LostPageModule)
  },
  {
    path: 'pet',
    loadChildren: () => import('./pages/pet/pet.module').then(m => m.PetPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then(m => m.EventsPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message/message.module').then(m => m.MessagePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'pet-info',
    loadChildren: () => import('./pages/pet-info/pet-info.module').then( m => m.PetInfoPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'accountsettings',
    loadChildren: () => import('./pages/accountsettings/accountsettings.module').then( m => m.AccountsettingsPageModule)
  },
  {
    path: 'donation-home',
    loadChildren: () => import('./pages/donation-home/donation-home.module').then( m => m.DonationHomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./pages/login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup1',
    loadChildren: () => import('./pages/signup1/signup1.module').then( m => m.Signup1PageModule)
  },
  {
    path: 'signup2',
    loadChildren: () => import('./pages/signup2/signup2.module').then( m => m.Signup2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
