import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SessionItemEnum } from '../common/services/session.service';

import { Credentials, LoggedInSuccessfully } from './auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(credentials: Credentials): Observable<LoggedInSuccessfully> {
    try {
      return this.httpClient.post<LoggedInSuccessfully>(
        `${environment.BACKEND_ADDRESS}/auth/sign-in`,
        credentials
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  logOut(): void {
    try {
      localStorage.removeItem(SessionItemEnum.ACCESS_TOKEN);
      localStorage.removeItem(SessionItemEnum.EXPIRES_IN);
      this.router.navigate(['auth']);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
