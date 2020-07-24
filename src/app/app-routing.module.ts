import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ContactListComponent } from '../app/contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import {AppLoginComponent} from './app-login/app-login.component';
import {AppRegisterComponent} from './app-register/app-register.component';

import {NeedAuthGuard} from './shared/need-auth-guard.service';

const routes: Routes = [
  //{ path: '', component: AppLoginComponent},
  {path: 'login',component: AppLoginComponent},
  {path: 'register',component: AppRegisterComponent},
  { path:'contact-list',component:ContactListComponent, canActivate: [NeedAuthGuard]},
 { path: 'create-contact', component: ContactCreateComponent, canActivate: [NeedAuthGuard]},
  { path: 'contact-edit/:id', component: ContactEditComponent, canActivate: [NeedAuthGuard] },
  {path: '', component: AppLoginComponent},
  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
