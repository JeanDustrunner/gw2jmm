import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../../app/services/api-service/api.service";
import { ApiKey, User } from "@prisma/client";
import { StateService } from "../../app/services/state-service/state.service";
import "../../components/table/app-table.component";

@Component({
    selector: 'profile-page',
    templateUrl: './profile-page.component.html'
  })
export class ProfilePage implements OnInit {

  public $apiKeys!: Observable<ApiKey[]>;

  constructor(
    public api: ApiService,
    public state: StateService
  ) { };

  public getKeys(): void {
    if (this.state.currentUser) {
      this.$apiKeys = this.api.getApiKeysForUser(this.state.currentUser.id);
    } else {
      this.state.currentUserReady?.subscribe({
        next: () => {
          console.log('USER READY!')
          this.$apiKeys = this.api.getApiKeysForUser(this.state.currentUser.id);
        }
      })
    }
  }

  ngOnInit() {
    this.getKeys();
  }

  ngOnDestroy() {
    // this.userObserver.unsubscribe()
  }

}