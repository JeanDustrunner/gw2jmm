import { Injectable } from "@angular/core";
import { ApiKey, User } from "@prisma/client";
import { AuthService } from "@auth0/auth0-angular";
import { ApiService } from "../api-service/api.service";
import { Subject } from "rxjs";


@Injectable({providedIn: 'root'})
export class StateService {
    public currentUser!: User
    public currentUserReady = new Subject
    public activeApiKey!: ApiKey
    public activeApiKeyReady = new Subject
    private _auth0User!: {
        email: string,
        email_verified: boolean,
        name: string,
        nickname: string,
        picture: string,
        sub: string,
        updated_at: string
    };

    constructor(
        public auth: AuthService,
        public api: ApiService
      ) {
        console.log('StateService initialized!')
        this.auth.user$.subscribe(this.userObserver);
      };

    public setCurrentUser(user: User): void {
        if (user === null) {
            console.log('No such user yet! Creating user!');
            this.api.createUser(this._auth0User.email, this._auth0User.name).subscribe(this.apiUserObserver);
        } else {
            console.log('Setting current user to: ', user);
            this.currentUser = user;
            this.currentUserReady.next(true);
            if (user.activeKeyId) {
                this.api.getApiKeyById(user.activeKeyId).subscribe(this.activeApiKeyObserver)
            }          
        }
    }

    public setActiveApiKey(apiKey: ApiKey): void {
        if (apiKey === null) {
            console.log('User has no active key!')
        } else {
            console.log('Setting active apiKey to: ', apiKey);
            this.activeApiKey = apiKey;
            this.activeApiKeyReady.next(true);
        }
    }

    public userObserver = {
        next: (x:any) => {
            if (x) {
                console.log('auth0user: ', x);
                this._auth0User = x;
                this.api.getUserByEmail(x['email']).subscribe(this.apiUserObserver);                
            }           
        }
    }

    public apiUserObserver = {
        next: (e: any) => this.setCurrentUser(e)
    }

    public activeApiKeyObserver = {
        next: (e: any) => this.setActiveApiKey(e)
    }
}