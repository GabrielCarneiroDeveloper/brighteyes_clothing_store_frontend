import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [EmployeeFormComponent],
})
export class EmployeeFormModule {}
