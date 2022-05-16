import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';

import { ItemPage } from '../pages/item/item-page.component';
import { ProfilePage } from '../pages/profile/profile-page.component';
import { ApiService } from './services/api-service/api.service';
import { StateService } from './services/state-service/state.service';

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
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-7jvcu5os.us.auth0.com',
      clientId: 'BvNorprCw25arKdg6yYB27C0tdUjJdog',
      redirectUri: window.location.origin,
      cacheLocation: 'localstorage'
    }),
  ],
  providers: [
    ApiService,
    StateService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
