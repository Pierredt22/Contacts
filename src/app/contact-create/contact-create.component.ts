import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { HttpApiService } from "../shared/http-api.service";
import { CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  @Input() contactDetails = { firstName: '', lastName: '', email: '', mobileNumber:'', FkUserId: -1}

  constructor(
    public restApi: HttpApiService, 
    public router: Router,
    public customer: CustomerService
  ) { }

  ngOnInit() { }

  addContact() {
    const c = JSON.parse(localStorage.getItem("USER"));
    //console.log(c);
    this.contactDetails.FkUserId = c.id;
    console.log(c.id);
    this.restApi.createContact(this.contactDetails).subscribe((data: {}) => {
      this.router.navigate(['/contact-list'])
    })
  }

}