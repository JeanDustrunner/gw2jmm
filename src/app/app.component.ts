import { Component, OnInit } from '@angular/core';

import '../components/nav-bar/nav-bar.component';

// interface navLink {
//   path: string,
//   display: string
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gw2jmm';
  navigationLinks: Object[] = [
    {path: './', display: 'HOME'},
    {path: './profile', display: 'Profile'},
    {path: './items', display: 'Items'}
  ];

  ngOnInit(): void {
    console.log('NAVLIST FROM APP: ', this.navigationLinks)
  }
}
