import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppRegisterComponent } from './app-register/app-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactEditComponent,
    ContactCreateComponent,
    AppLoginComponent,
    AppHeaderComponent,
    AppRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
