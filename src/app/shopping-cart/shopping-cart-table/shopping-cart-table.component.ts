import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Clothes } from 'src/app/clothes/clothes.interface';
import { ShoppingCart } from '../shopping-cart.interface';
import { ShoppingCartService } from '../shopping-cart.service';
import { calcTotalCost } from './../../common/calcTotalCost';
import { parseFromISOToLocaleDate } from './../../common/dateFormatter'

@Component({
  selector: 'app-shopping-cart-table',
  templateUrl: './shopping-cart-table.component.html',
  styleUrls: ['./shopping-cart-table.component.scss'],
})
export class ShoppingCartTableComponent implements OnInit {
  @Input() shoppingCartList$: Observable<ShoppingCart[]>;

  @Output() loadShoppingCartList = new EventEmitter<void>();
  @Output() findOne = new EventEmitter<ShoppingCart>();

  a: boolean

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}

  totalValue(clothes: Clothes[]): number {
    return calcTotalCost(clothes);
  }

  parseDate(dateIso: string) {
    return parseFromISOToLocaleDate(dateIso)
  }

  addClothes({
    requestedClothesId,
    shoppingCartId,
  }: {
    requestedClothesId: number;
    shoppingCartId: number;
  }): void {
    this.shoppingCartService
      .addClothesToShoppingCart(shoppingCartId, requestedClothesId)
      .subscribe(
        (response) => {
          this.loadShoppingCartList.next();
        },
        ({ error }: HttpErrorResponse) => {
          alert('Requested clothes not found or its already added')
        }
      );
  }

  removeClothes({
    requestedClothesId,
    shoppingCartId,
  }: {
    requestedClothesId: number;
    shoppingCartId: number;
  }): void {
    this.shoppingCartService
      .removeClothesToShoppingCart(shoppingCartId, requestedClothesId)
      .subscribe(
        (response) => {
          console.log(response);
          this.loadShoppingCartList.next();
        },
        ({ error }: HttpErrorResponse) => {
          console.error(error.message);
        }
      );
  }

  updateButtonClicked(shoppingCart: ShoppingCart): void {
    this.findOne.next(shoppingCart);
  }
}
