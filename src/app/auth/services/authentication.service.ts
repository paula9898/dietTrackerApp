import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient) {}

  public tokenKey: string = 'token';

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  login(user: User): Observable<User> {
    return this.httpClient.post(
      AUTH_API + 'signin',
      user,
      httpOptions
    ) as Observable<User>;
  }

  register(user: User): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signup', user, httpOptions);
  }
}
