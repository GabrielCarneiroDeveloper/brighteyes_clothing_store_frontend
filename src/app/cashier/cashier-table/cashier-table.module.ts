import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashierTableComponent } from './cashier-table.component';
import { CashierModalModule } from './../cashier-modal/cashier-modal.module';
import { CashierModalFinishPurchaseModule } from './../cashier-modal-finish-purchase/cashier-modal-finish-purchase.module';

@NgModule({
  declarations: [CashierTableComponent],
  imports: [CommonModule, CashierModalModule, CashierModalFinishPurchaseModule],
  exports: [CashierTableComponent],
})
export class CashierTableModule {}
