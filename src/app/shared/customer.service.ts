import { Injectable } from '@angular/core';
import { User } from './user';

const TOKEN = 'TOKEN';
const USER = 'USER';

@Injectable({
  providedIn: 'root'
})
export class CustomerService   {

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  removeToken(){
    localStorage.removeItem(TOKEN);
  }

  removeUser(){
    localStorage.removeItem(USER);
  }

}