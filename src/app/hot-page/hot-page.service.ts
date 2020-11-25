import { Injectable } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { Observable } from 'rxjs';
import { Clothes } from '../clothes/clothes.interface';
import { ClothesService } from '../clothes/clothes.service';

@Injectable({
  providedIn: 'root',
})
export class HotPageService {
  constructor(
    private clothesService: ClothesService,
    private authService: SocialAuthService
  ) {}

  clothesList(): Observable<Clothes[]> {
    return this.clothesService.list();
  }

  signInWithGoogle(): Promise<SocialUser> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  async signOutWithGoogle(): Promise<void> {
    await this.authService.signOut(true);
    localStorage.clear();
  }

  getUser(): Observable<SocialUser> {
    return this.authService.authState;
  }
}
