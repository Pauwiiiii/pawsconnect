import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  /**
   * 
   *
   * @param {string} key 
   * @param {string} value 
   * @memberof StorageService
   * 
   */
  setStorage(key: string, value: string) {
    value = value.toString();
    Preferences.set({
      key: key,
      value: value
    });
  }


  /**
   * 
   *
   * @param {string} key 
   * @memberof StorageService
   */
  getStorage(key: string) {
    return Preferences.get({ key: key });
  }

  /**
   * 
   *
   * @param {string} key 
   * @memberof StorageService
   */
  removeStorage(key: string) {
    Preferences.remove({ key: key });
  }

  keys() {
    return Preferences.keys();
  }

  /**
   * 
   *
   * @memberof StorageService
   */
  clearStorage() {
    Preferences.clear();
  }
}
