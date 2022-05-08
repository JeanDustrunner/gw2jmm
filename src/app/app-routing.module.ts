import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from 'src/pages/profile/profile-page.component';
import { ItemPage } from 'src/pages/item/item-page.component';

const routes: Routes = [
  {path: 'profile', component: ProfilePage},
  {path: 'items', component: ItemPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
