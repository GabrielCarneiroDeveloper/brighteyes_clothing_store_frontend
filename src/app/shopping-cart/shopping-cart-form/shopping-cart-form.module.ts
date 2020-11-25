import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartFormComponent } from './shopping-cart-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingCartFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ShoppingCartFormComponent],
})
export class ShoppingCartFormModule {}
