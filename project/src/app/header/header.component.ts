import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  checkUserLoggedIn() {
    if( localStorage.getItem('jwt')) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.clear();
    this._route.navigate(['']);
  }

  openProfile() {
    let token = JSON.parse(jwt_decode(localStorage.getItem('jwt')));
    if(token.role == "counselor") {
      this._route.navigate(['counselor-profile']);
    }
    else {
      this._route.navigate(['seeker-profile']);
    }
  }

}
