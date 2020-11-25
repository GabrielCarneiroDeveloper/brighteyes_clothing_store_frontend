import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { Clothes } from '../clothes/clothes.interface';
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

  constructor(private hotPageService: HotPageService) {}

  ngOnInit(): void {
    this.clothesList$ = this.hotPageService.clothesList();
    this.hotPageService.getUser().subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  signIn(): void {
    this.hotPageService.signInWithGoogle();
  }

  signOut(): void {
    this.hotPageService.signOutWithGoogle();
  }
}
