import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRole } from '../Models/roles';
import { AdminAuthService } from '../services/admin-auth.service';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  userDataSubscription: any;
  userData = new User();
  
  constructor(private router: Router, private authService: AdminAuthService) {
    this.userDataSubscription = this.authService.userData.asObservable().subscribe(data => {
      this.userData = data;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('authToken') != null && this.userData.Role === UserRole.Admin) {
      return true;
    }

    this.router.navigate(['/Admin/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
