import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ShoppingCart,
  ShoppingCartCreateDTO,
  ShoppingCartStatus,
  CreateShoppingCartSuccessfullResponse,
  ShoppingCartUpdateDTO,
  UpdateShoppingCartSuccessfullResponse,
  ShoppingCartStatusEnum,
} from './shopping-cart.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<ShoppingCart[]> {
    try {
      return this.httpClient.get<ShoppingCart[]>(
        `${environment.BACKEND_ADDRESS}/shopping-cart`
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  addClothesToShoppingCart(
    shoppingCartId: number,
    clothesId: number
  ): Observable<ShoppingCart> {
    try {
      return this.httpClient.put<ShoppingCart>(
        `${environment.BACKEND_ADDRESS}/shopping-cart/${shoppingCartId}/add-clothes/${clothesId}`,
        null
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  removeClothesToShoppingCart(
    shoppingCartId: number,
    clothesId: number
  ): Observable<ShoppingCart> {
    try {
      return this.httpClient.put<ShoppingCart>(
        `${environment.BACKEND_ADDRESS}/shopping-cart/${shoppingCartId}/remove-clothes/${clothesId}`,
        null
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getStatusList(): Observable<ShoppingCartStatus[]> {
    try {
      return this.httpClient.get<ShoppingCartStatus[]>(
        `${environment.BACKEND_ADDRESS}/shopping-cart-status`
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  create(
    shoppingCart: ShoppingCartCreateDTO
  ): Observable<CreateShoppingCartSuccessfullResponse> {
    return this.httpClient.post<CreateShoppingCartSuccessfullResponse>(
      `${environment.BACKEND_ADDRESS}/shopping-cart`,
      shoppingCart
    );
  }

  update(
    shoppingCart: ShoppingCartUpdateDTO
  ): Observable<UpdateShoppingCartSuccessfullResponse> {
    return this.httpClient.put<UpdateShoppingCartSuccessfullResponse>(
      `${environment.BACKEND_ADDRESS}/shopping-cart/` + shoppingCart.id,
      shoppingCart
    );
  }

  async pay({
    cashierId,
    shoppingCartId,
  }: {
    shoppingCartId: number;
    cashierId: number;
  }): Promise<Observable<UpdateShoppingCartSuccessfullResponse>> {
    const finishedStatus = (await this.getStatusList().toPromise()).find(
      (status) => status.name === ShoppingCartStatusEnum.FINISHED
    );

    return this.httpClient.put<UpdateShoppingCartSuccessfullResponse>(
      `${environment.BACKEND_ADDRESS}/shopping-cart/` + shoppingCartId,
      {
        status: finishedStatus.id,
        cashier: cashierId,
      }
    );
  }
}
