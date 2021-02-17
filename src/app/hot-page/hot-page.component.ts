import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { finalize, groupBy, map, mergeMap, toArray } from 'rxjs/operators';
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
    this.hotPageService.getUser().subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });

    this.clothesList$ = this.hotPageService
      .clothesList()
      .pipe(map((clothesList) => this.sortClothesByStock(clothesList)))
      .pipe(finalize(() => this.loadingService.stop()));

    this.loadingService.stop();
  }

  sortClothesByStock(clothesList: Clothes[]): Clothes[] {
    return clothesList.sort((a, b) => {
      if (a.quantityInStock < b.quantityInStock) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  async signIn(): Promise<void> {
    const r = await this.hotPageService.signInWithGoogle();
    this.loadingService.start();
    if (r) {
      console.log('Logged in...');
    } else {
      throw new Error('An error occurred at try to login');
    }
    this.loadingService.stop();
  }

  async signOut(): Promise<void> {
    this.loadingService.start();
    await this.hotPageService
      .signOutWithGoogle()
      .then(() => this.loadingService.stop());
  }

  outOfStock(clothes: Clothes): boolean {
    return clothes.quantityInStock <= 0;
  }

  getFormattedPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }
}
