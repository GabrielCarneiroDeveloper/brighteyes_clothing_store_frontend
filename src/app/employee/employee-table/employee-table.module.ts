import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTableComponent } from './employee-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeTableComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [EmployeeTableComponent],
})
export class EmployeeTableModule {}
