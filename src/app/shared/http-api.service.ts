import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../shared/contact';
import { User } from '../shared/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  apiURL = 'https://localhost:44399/api/user';

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  


  login(username: string, password: string): Observable<User>{
    return this.http.post<User>(this.apiURL + '/Auth', {userName: username,password: password}, this.httpOptions)
    .pipe(
        retry(1),
        catchError(this.handleError)
    );
  }


  getContacts(): Observable<Contact> {
    return this.http.get<Contact>(this.apiURL + '/GetContacts')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getContacts2(id): Observable<Contact> {
    return this.http.get<Contact>(this.apiURL + '/GetContacts/'+id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  getContact(id): Observable<Contact> {
    return this.http.get<Contact>(this.apiURL + '/GetContactDetail/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  


  createContact(contact): Observable<Contact> {
    console.log(contact);
    console.log(JSON.stringify(contact));
    return this.http.post<Contact>(this.apiURL + '/AddContact', JSON.stringify(contact), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  


  createUser(user)   {
     // console.log(user);
      //console.log(JSON.stringify(user));
      return this.http.post(this.apiURL + '/AddUser', JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }  

  updateContact(id, contact): Observable<Contact> {
    //console.log(id);
    //console.log(JSON.stringify(contact));
    return this.http.put<Contact>(this.apiURL + '/EditContact', JSON.stringify(contact), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  deleteContact(id){
    return this.http.delete<Contact>(this.apiURL + '/DeleteContact/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    console.log(error.error.message);
     let errorMessage = '';

     if (error.error.message != '' || error.error.message != null){
       errorMessage = error.error.message;
     } else {

       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}