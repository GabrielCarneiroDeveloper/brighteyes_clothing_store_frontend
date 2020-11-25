import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { CashierComponent } from './cashier.component';

import { CashierFormModule } from './cashier-form/cashier-form.module';
import { CashierTableModule } from './cashier-table/cashier-table.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CashierComponent],
  imports: [
    CommonModule,
    CashierRoutingModule,
    CashierFormModule,
    CashierTableModule,
    SharedModule,
  ],
})
export class CashierModule {}
