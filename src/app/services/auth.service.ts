// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/pawsconnect_api/login.php'; //API URL

  constructor(private http: HttpClient) {}

  // Update the method to accept email 
  login(email: string, password: string): Observable<any> {
    const body = { email, password }; 
    return this.http.post(this.apiUrl, body);
  }

  // Add a method to set the login state
  setLoginState(isLoggedIn: boolean): void {
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
  }
}
