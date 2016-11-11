import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserManagementService } from '../user-management';

import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';

@Injectable()
export class NotAuthGuard implements CanActivate {
  notAuth: AsyncSubject<boolean>;
  constructor(private _router: Router, private userManagementService: UserManagementService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.notAuth = <AsyncSubject<boolean>>new AsyncSubject();
    this.userManagementService.user.subscribe(isLogged => {
      this.notAuth.next(!isLogged);
      if (isLogged) this._router.navigate(['']);
      this.notAuth.complete();
    });
    return this.notAuth;
  }
}
