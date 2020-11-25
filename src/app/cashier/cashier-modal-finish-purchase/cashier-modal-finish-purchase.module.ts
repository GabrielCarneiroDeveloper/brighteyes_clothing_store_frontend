import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashierModalFinishPurchaseComponent } from './cashier-modal-finish-purchase.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [CashierModalFinishPurchaseComponent],
  imports: [CommonModule, ModalModule],
  exports: [CashierModalFinishPurchaseComponent],
})
export class CashierModalFinishPurchaseModule {}
