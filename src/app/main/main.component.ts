import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserManagementService } from './../shared';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _router: Router, private userManagementService: UserManagementService) { }

  ngOnInit() {

  }

  Logout() {
    let userManagementServiceRef = this.userManagementService;
    FB.logout(function (response) {
      userManagementServiceRef.logout();
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].split("=")[0].indexOf("fblo_") != -1)
          document.cookie = cookies[i].split("=")[0] + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
      }
    });
  }
}
