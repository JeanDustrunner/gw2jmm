import { Component, OnInit, Inject } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

import '../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gw2jmm';
  navigationLinks: Object[] = [
    {path: './', display: 'HOME', auth: false},
    {path: './profile', display: 'Profile', auth: true},
    {path: './items', display: 'Items', auth: true}
  ];


  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document
    ) { }

  ngOnInit(): void {
    console.log('NAVLIST FROM APP: ', this.navigationLinks)    
  }
}
