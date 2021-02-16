import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Clothes } from '../clothes/clothes.interface';
import { LoadingService } from '../shared/loading/loading.service';
import { HotPageService } from './hot-page.service';

// interface User {
//   data: SocialUser;
//   loggedIn: boolean;
// }

@Component({
  selector: 'app-hot-page',
  templateUrl: './hot-page.component.html',
  styleUrls: ['./hot-page.component.scss'],
})
export class HotPageComponent implements OnInit {
  clothesList$: Observable<Clothes[]>;
  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private hotPageService: HotPageService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.clothesList$ = this.hotPageService
      .clothesList()
      .pipe(finalize(() => this.loadingService.stop()));
    this.hotPageService.getUser().subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  async signIn(): Promise<void> {
    this.loadingService.start();
    const r = await this.hotPageService.signInWithGoogle();
    if (r) {
      console.log('Logged in...');
    } else {
      throw new Error('An error occurred at try to login');
    }
    this.loadingService.stop();
  }

  async signOut(): Promise<void> {
    this.loadingService.start();
    await this.hotPageService.signOutWithGoogle().then();
    this.loadingService.stop();
  }
}
