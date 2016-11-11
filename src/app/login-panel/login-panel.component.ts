import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { FacebookLoginService } from '../shared';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {
  constructor(private _router: Router, private facebookLoginService: FacebookLoginService) {
  }

  ngOnInit() {
    
  }

  onFacebookLoginClick() {
    this.facebookLoginService.login();
  }
}
