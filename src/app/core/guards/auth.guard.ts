import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';


@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLogged()) {
      return true;
    } else {
      this.router.navigate(['login']);
      console.log('Niste ulgovani molimo ulogujte se');
      return false;
    }
  }
}
