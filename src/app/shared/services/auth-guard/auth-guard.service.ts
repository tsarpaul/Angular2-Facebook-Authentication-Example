import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { UserManagementService } from '../user-management';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router, private userManagementService: UserManagementService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.userManagementService.user.subscribe(isLogged => {
      if (!isLogged){ this._router.navigate(['login']);};
    },
      err => console.log(err),
      () => console.log('auth guard complete'));
    return this.userManagementService.user;
  }

}
