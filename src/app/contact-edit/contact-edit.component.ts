import { Component, OnInit } from '@angular/core';
import { HttpApiService } from "../shared/http-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  id=this.actRout.snapshot.params['id'];
  contactData: any = [];

  constructor(public httpApi: HttpApiService, 
              public actRout: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
    this.httpApi.getContact(this.id).subscribe((data: {}) => {
      this.contactData  = data;
    })
  }

    // Update contact data
    updateContact() {
      if(window.confirm('Are you sure, you want to update?')){
        this.httpApi.updateContact(this.id, this.contactData).subscribe(data => {
          this.router.navigate(['/contact-list'])
        })
      }
    }

}
