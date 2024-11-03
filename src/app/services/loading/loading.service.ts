import { inject, Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
// Works for loading dialog
  public loading: any;
  private loadingCtrl = inject(LoadingController);
  constructor() { }

  async showLoading(message: any = null) {
    const loading = await this.loadingCtrl.create({
      message: message,
    });

    this.loading = loading;
    loading.present();
  }

  async dismiss() {
    this.loading.dismiss();
  }
}
