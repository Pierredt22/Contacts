import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../shared/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private customer: CustomerService, public router : Router) { }

  ngOnInit(): void {
  }

  logOut(){

    this.customer.removeToken();
    this.customer.removeUser();

    this.router.navigate(['/Login'])
  }

}
