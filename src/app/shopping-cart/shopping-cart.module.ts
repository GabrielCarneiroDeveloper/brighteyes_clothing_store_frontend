import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartTableModule } from './shopping-cart-table/shopping-cart-table.module';
import { ShoppingCartFormModule } from './shopping-cart-form/shopping-cart-form.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    ShoppingCartTableModule,
    ShoppingCartFormModule,
    SharedModule,
  ],
})
export class ShoppingCartModule {}
