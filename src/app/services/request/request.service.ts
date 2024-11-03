import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  /**
 * Performs http GET request method.
 * @param url URL to be requested.
 * @param params Paramters to be passed on.
 * @param headers Custom of http headers.
 */
  async get(url: string, { ...params } = {}, { ...headers } = {}) {


    return new Promise((resolve, reject) => {
      CapacitorHttp.request({
        url: url,
        method: 'get',
        params: params,
        headers: headers
      })
        .then(e => {
          if (e.status == 200)
            resolve(e.data);
          else
            reject(e);
        })
        .catch(e => {
          console.error('Error: ', e);
          reject(`Error: ${e}`);
        })
    })
  }


  /**
   * Performs http POST request method.
   * @param url URL to be requested.
   * @param data Data to be passed on.
   * @param headers Custom HTTP headers
   */
  async post(url: string, { ...data } = {}, { ...headers } = {}) {


    return new Promise((resolve, reject) => {
      CapacitorHttp.request({
        url: url,
        params: data,
        method: 'post',
        headers: headers
      })
        .then(e => {
          if (e.status == 200)
            resolve(e.data);
          else
            reject(e);
        })
        .catch(e => {
          console.error('Error: ', e);
          reject(`Error: ${e}`);
        })
    })
  }
}
