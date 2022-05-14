import { Component, OnInit, Inject } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { Prisma, PrismaClient } from '@prisma/client';
import { DOCUMENT } from '@angular/common';

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
    {path: './', display: 'HOME', auth: false},
    {path: './profile', display: 'Profile', auth: true},
    {path: './items', display: 'Items', auth: true}
  ];

  public prisma!: PrismaClient;

  constructor(
    public auth: AuthService,
    // prisma = new PrismaClient
    @Inject(DOCUMENT) public document: Document
    ) {
      const prisma = new PrismaClient
    }

  public async main() {
    const allUsers = await this.prisma.user.findMany();
    console.log('DB USERS: ', allUsers)
  }

  ngOnInit(): void {
    console.log('NAVLIST FROM APP: ', this.navigationLinks)
    this.main();
    
  }
}
