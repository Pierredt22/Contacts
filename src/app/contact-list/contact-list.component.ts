import { Component, OnInit } from '@angular/core';
import { HttpApiService } from "../shared/http-api.service";
import {CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  Contact: any = [];

  constructor(public httpApi : HttpApiService, public customer: CustomerService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  // Get contact list
  loadContacts() {
    const c = JSON.parse(localStorage.getItem("USER")); 
    //console.log(c.id);

    return this.httpApi.getContacts2(c.id).subscribe((data: {}) => {
      console.log(data);
      this.Contact = data;
    })
  }

  // Delete Contact
  deleteContact(id) {   
    if (window.confirm('Are you sure, you want to delete?')){
      this.httpApi.deleteContact(id).subscribe(data => {
        this.loadContacts();
      })
    }
  }  

}
