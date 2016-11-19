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
    });
  }
}
