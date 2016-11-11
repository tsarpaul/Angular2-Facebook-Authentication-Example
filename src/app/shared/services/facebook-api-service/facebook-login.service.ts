import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';

import { UserManagementService } from '../user-management';

import './facebook-api';


@Injectable()
export class FacebookLoginService {

  constructor(private router: Router, private userManagementService: UserManagementService) {

  }

  login() {
    let userManagementRef = this.userManagementService;
    FB.login(function (Response) {
      if (Response['status'] === 'connected' && Response['authResponse']) {
        userManagementRef.login();
      }
    });
  }
}
