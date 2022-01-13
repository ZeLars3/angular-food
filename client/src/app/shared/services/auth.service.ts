import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private token = '';

  isAuthenticated(): boolean {
    return !!this.token;
  }

  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('/api/auth/register', user);
  }

  login(user: IUser): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/auth/login', user).pipe(
      tap(({ token }) => {
        localStorage.setItem('auth-token', token);
        this.setToken(token);
      })
    );
  }

  setToken(token: any) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }
}
