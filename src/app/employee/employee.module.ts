import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeTableModule } from './employee-table/employee-table.module';
import { EmployeeFormModule } from './employee-form/employee-form.module';
import { EmployeeService } from './employee.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    EmployeeTableModule,
    EmployeeFormModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [EmployeeService],
})
export class EmployeeModule {}
