import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesTableComponent } from './sales-table.component';

@NgModule({
  declarations: [SalesTableComponent],
  imports: [CommonModule],
  exports: [SalesTableComponent],
})
export class SalesTableModule {}
