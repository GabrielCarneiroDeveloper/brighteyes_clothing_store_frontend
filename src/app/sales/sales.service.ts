import { Injectable } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor(private shoppingCartService: ShoppingCartService) {}
}
