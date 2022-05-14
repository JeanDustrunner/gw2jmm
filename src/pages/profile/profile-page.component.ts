import { Component, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    selector: 'profile-page',
    templateUrl: './profile-page.component.html'
  })
export class ProfilePage implements OnInit{

  constructor(public auth: AuthService) {

  };

  public userObserver = {
    next: (x:any) => console.log('INCOMING USER: ', x)
  }

  ngOnInit() {
    this.auth.user$.subscribe(this.userObserver);
  }

  ngOnDestroy() {
    // this.userObserver.unsubscribe()
  }

}