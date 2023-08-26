import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRole } from '../Models/roles';
import { AuthService } from '../services/auth.service';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {
  userDataSubscription: any;
  userData = new User();
  constructor(private router: Router, private authService: AuthService) {
    this.userDataSubscription = this.authService.userData.asObservable().subscribe(data => {
      this.userData = data;
    });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.userData.Role == UserRole.Doctor) {
      return true;
    }
    if (localStorage.getItem('authToken')!=null){
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }


}
