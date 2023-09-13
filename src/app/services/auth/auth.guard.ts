import { AuthService } from './auth.service';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotifyService } from '../notify.service';




@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor( private router: Router, private auth : AuthService, private noty : NotifyService) {}

  canActivate(){

    if( this.auth.isLoggedIn()){
      return true ;
    }

    this.router.navigate(['login']) ;

    this.noty.error('Need to login first.');

    return false;
  }
}