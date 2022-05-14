import { Component, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { Observable } from "rxjs";
import { PrismaService } from "../../app/services/prisma/prisma.service";
import { User } from "@prisma/client";

@Component({
    selector: 'profile-page',
    templateUrl: './profile-page.component.html'
  })
export class ProfilePage implements OnInit{

  public $users!: Observable<User[]>

  constructor(
    public auth: AuthService,
    public prisma: PrismaService
  ) { };

  public userObserver = {
    next: (x:any) => console.log('INCOMING USER: ', x)
  }  

  ngOnInit() {
    this.auth.user$.subscribe(this.userObserver);
    this.$users = this.prisma.getUsers();
  }

  ngOnDestroy() {
    // this.userObserver.unsubscribe()
  }

}