import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothesTableComponent } from './clothes-table.component';

@NgModule({
  declarations: [ClothesTableComponent],
  imports: [CommonModule],
  exports: [ClothesTableComponent],
})
export class ClothesTableModule {}
