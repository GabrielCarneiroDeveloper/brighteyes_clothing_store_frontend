import { Injectable } from '@angular/core';
import { TokenData } from 'src/app/auth/auth.interface';

import jwt_decode from 'jwt-decode';

export enum SessionItemEnum {
  EXPIRES_IN = 'expires_in',
  ACCESS_TOKEN = 'access_token',
}

export interface DataStoredInToken {
  username: string;
  email: string;
  isValid: boolean;
  title: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  createSession(at: TokenData): void {
    try {
      localStorage.setItem(SessionItemEnum.EXPIRES_IN, at.expiresIn.toString());
      localStorage.setItem(SessionItemEnum.ACCESS_TOKEN, at.token);
      console.log('credentials saved in session');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getToken(): string {
    return localStorage.getItem(SessionItemEnum.ACCESS_TOKEN);
  }

  decodeSession(): DataStoredInToken {
    try {
      return jwt_decode(this.getToken());
    } catch (error) {
      throw new Error(error.message);
    }
  }

  isLogged(): boolean {
    try {
      const userInfo = this.decodeSession();
      if (userInfo) {
        return userInfo && userInfo.isValid;
      }
    } catch (error) {
      return false;
    }
  }

  logOut(): void {
    try {
      localStorage.removeItem(SessionItemEnum.ACCESS_TOKEN);
      localStorage.removeItem(SessionItemEnum.EXPIRES_IN);
    } catch (error) {
      console.error('Error at try to logged out');
      throw new Error(error);
    }
  }
}
