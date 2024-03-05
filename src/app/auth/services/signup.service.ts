import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { API_URL } from 'src/app/apiUrl-const';

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private httpClient: HttpClient) {}

  // register(user: User): Observable<any> {
  //   return this.httpClient.post(
  //     `API_URL}auth/signup`,
  //     user
  //   ) as Observable<User>;
  // }
  register(user: User): Observable<User> {
    return this.httpClient.post(AUTH_API + 'signup', user) as Observable<User>;
  }
}
