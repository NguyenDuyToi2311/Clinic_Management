import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject<User>(new User());

  constructor(private http: HttpClient, private router: Router) { }

  login(userDetails: any) {
    return this.http.post<any>('https://localhost:44352/api/login', userDetails).pipe(map(response => {
      localStorage.setItem('authToken', response.token);
      this.setUserDetails();
      return response;
    }));
  }

  setUserDetails() {
    if (localStorage.getItem('authToken') != null) {
      const userDetails = new User();
      const decodeUserDetails = JSON.parse(window.atob((localStorage.getItem('authToken') || "").split('.')[1]));
      userDetails.UserName = decodeUserDetails.sub;
      userDetails.FullName = decodeUserDetails.fullName;
      userDetails.IsLoggedIn = true;
      userDetails.Role = decodeUserDetails.role;
      userDetails.UserId = decodeUserDetails.userid;
      this.userData.next(userDetails);
    }
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
    this.userData.next(new User());
  }
}
