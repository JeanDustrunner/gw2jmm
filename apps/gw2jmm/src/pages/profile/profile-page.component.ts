import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../../app/services/api-service/api.service";
import { ApiKey, User } from "@prisma/client";
import { StateService } from "../../app/services/state-service/state.service";
import "../../components/table/app-table.component";
import { Header } from "../../components/table/app-table.component";

@Component({
    selector: 'profile-page',
    templateUrl: './profile-page.component.html'
  })
export class ProfilePage implements OnInit {

  public apiKeys!: ApiKey[];
  public ptr: Header[] = [
    {
      name:'id',
      display: '',
      hide: true
    }, {
      name: 'key',
      display: 'API Key',
      hide: false
    }, {
      name: 'desc',
      display: 'Description',
      hide: false
    }
  ]

  constructor(
    public api: ApiService,
    public state: StateService
  ) { };

  public getKeys(): void {
    if (this.state.currentUser) {
      this.api.getApiKeysForUser(this.state.currentUser.id).subscribe(x => this.apiKeys = x);
    } else {
      this.state.currentUserReady?.subscribe({
        next: () => {
          console.log('USER READY!')
          this.api.getApiKeysForUser(this.state.currentUser.id).subscribe(x => this.apiKeys = x);
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