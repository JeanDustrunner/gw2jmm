import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';

import { ItemPage } from 'src/pages/item/item-page.component';
import { ProfilePage } from 'src/pages/profile/profile-page.component';
import { PrismaService } from './services/prismaService/prisma.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AuthModule.forRoot({
      domain: 'dev-7jvcu5os.us.auth0.com',
      clientId: 'BvNorprCw25arKdg6yYB27C0tdUjJdog',
      redirectUri: window.location.origin,
      cacheLocation: 'localstorage'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
