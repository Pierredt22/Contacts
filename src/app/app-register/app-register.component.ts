import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { HttpApiService } from "../shared/http-api.service";
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent implements OnInit {

  @Input() userDetails = { userName: '', password: ''}

  constructor(
    public restApi: HttpApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addUser() {

     this.restApi.createUser(this.userDetails)
    .pipe(first())
    .subscribe(
        data => {
          alert("Registration successful")
          this.router.navigate(['/Login'])
        },
        error => {
          //alert(error);
        });
  }

}

