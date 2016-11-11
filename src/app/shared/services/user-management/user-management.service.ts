import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AsyncSubject } from 'rxjs/AsyncSubject';

@Injectable()
export class UserManagementService {
  private user$: AsyncSubject<boolean>;
  constructor(private _router: Router) {
    this.pushChanges();
  }

  //checks if user still logged in and emits appropriatly, to be called when state change is expected.
  private pushChanges() {
    this.user$ = <AsyncSubject<boolean>>new AsyncSubject();
    let _routerRef = this._router;
    let user$Ref = this.user$;
    FB.getLoginStatus(function (response) {
      if (response['status'] === 'connected' && response['authResponse'])
        user$Ref.next(true);
      else user$Ref.next(false);
      user$Ref.complete();
    });
  }

  //checks if user logged in and routes him to homepage if so
  login() {
    this.pushChanges();
    this.user$.subscribe(isLogged => {
      if (isLogged) this._router.navigate(['']);
    }),
      err => console.log(err)
  }

  logout() {
    this.pushChanges();
    this.user$.subscribe(isLogged => {
      if (!isLogged) this._router.navigate(['login']);
    }),
      err => console.log(err);
  }

  get user() {
    return this.user$;
  }
}
