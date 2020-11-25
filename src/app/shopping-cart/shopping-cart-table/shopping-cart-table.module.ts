import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartTableComponent } from './shopping-cart-table.component';
import { ShoppingCartModalModule } from './../shopping-cart-modal/shopping-cart-modal.module';

@NgModule({
  declarations: [ShoppingCartTableComponent],
  imports: [CommonModule, ShoppingCartModalModule],
  exports: [ShoppingCartTableComponent],
})
export class ShoppingCartTableModule {}
