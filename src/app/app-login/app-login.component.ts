import {Component} from '@angular/core';
import {HttpApiService} from '../shared/http-api.service';
import {CustomerService} from '../shared/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {

  username = '';
  password = '';

  constructor(private api: HttpApiService, private customer: CustomerService, private router: Router) {

    //console.log(customer.getId);
    if (customer.isLogged){
      this.router.navigateByUrl('/contact-list');
    }
  }

  tryLogin() {
    this.api.login(
      this.username,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            localStorage.setItem('USER', JSON.stringify(r));
            this.router.navigateByUrl('/contact-list');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

}