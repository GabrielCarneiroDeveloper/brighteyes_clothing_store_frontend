import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesFormComponent } from './sales-form.component';
import { SalesFormClothesListComponent } from './sales-form-clothes-list/sales-form-clothes-list.component';

@NgModule({
  declarations: [SalesFormComponent, SalesFormClothesListComponent],
  imports: [CommonModule],
  exports: [SalesFormComponent],
})
export class SalesFormModule {}
