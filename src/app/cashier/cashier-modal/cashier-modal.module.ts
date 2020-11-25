import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { CashierModalComponent } from './cashier-modal.component';

@NgModule({
  declarations: [CashierModalComponent],
  imports: [CommonModule, ModalModule],
  exports: [CashierModalComponent],
})
export class CashierModalModule {}
