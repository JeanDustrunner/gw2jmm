import { Component, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Observable } from "rxjs";
import { ApiService } from "../../app/services/api-service/api.service";
import { ApiKey, User } from "@prisma/client";
import { StateService } from "../../app/services/state-service/state.service";

@Component({
    selector: 'profile-page',
    templateUrl: './profile-page.component.html'
  })
export class ProfilePage implements OnInit {

  // public $users!: Observable<User[]>
  // public $apiKeys!: Observable<ApiKey[]>
  // public $currentUser!: any

  constructor(
    public prisma: ApiService,
    public state: StateService
  ) { };

  // public userObserver = {
  //   next: (x:any) => this.prisma.getUserByEmail(x['email']).subscribe(this.dbUser)
  // }

  // public dbUser = {
  //   next: (e: any) => console.log('Wrzutka: ', e)
  // }

  ngOnInit() {
    // this.auth.user$.subscribe(this.userObserver);
    // this.$users = this.prisma.getUsers();
    // this.$apiKeys = this.prisma.getApiKeysForUser(1);
  }

  ngOnDestroy() {
    // this.userObserver.unsubscribe()
  }

}