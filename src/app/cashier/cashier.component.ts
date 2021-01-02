import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  DataStoredInToken,
  SessionService,
} from '../common/services/session.service';
import { LoadingService } from '../shared/loading/loading.service';
import {
  ShoppingCart,
  ShoppingCartStatusEnum,
} from '../shopping-cart/shopping-cart.interface';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.scss'],
})
export class CashierComponent implements OnInit {
  @Input() shoppingCartList$: Observable<ShoppingCart[]>;
  session: DataStoredInToken;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private sessionService: SessionService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadInProgressShoppingCartList();
  }

  loadInProgressShoppingCartList(): void {
    this.shoppingCartList$ = this.shoppingCartService
      .getList()
      .pipe(
        map((shoppingCarts) =>
          shoppingCarts.filter(
            (sc) => sc.status.name === ShoppingCartStatusEnum.IN_PROGRESS
          )
        )
      );
    this.loadingService.stop();
  }

  async paymentRegister({
    isOk,
    shoppingCartId,
  }: {
    isOk: boolean;
    shoppingCartId: number;
  }): Promise<void> {
    if (isOk) {
      const accessToken = localStorage.getItem('access_token');
      this.session = this.sessionService.decodeSession();
      const response = await this.shoppingCartService.pay({
        cashierId: this.session.id,
        shoppingCartId,
      });
      response.subscribe(
        (isSuccess) => {
          this.loadInProgressShoppingCartList();
        },
        (error) => console.error(error.message)
      );
    }
  }
}
