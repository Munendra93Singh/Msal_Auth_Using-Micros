import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { ViewComponent } from './components/view/view.component';
import { LoginInGuard } from './login-in.guard';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  // {path: 'users', component : UsersComponent ,canActivate:[LoginInGuard]},
  {path:'',component:ViewComponent}
 // {path:'', component:LoginComponent, canActivate:[LoginInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
