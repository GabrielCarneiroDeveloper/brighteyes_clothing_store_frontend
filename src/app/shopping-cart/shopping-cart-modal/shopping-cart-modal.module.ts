import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ShoppingCartModalComponent } from './shopping-cart-modal.component';

@NgModule({
  declarations: [ShoppingCartModalComponent],
  imports: [CommonModule, ModalModule, FormsModule, ReactiveFormsModule],
  exports: [ShoppingCartModalComponent],
})
export class ShoppingCartModalModule {}
