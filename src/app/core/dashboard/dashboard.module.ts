import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PieComponent } from './charts/pie/pie.component';
import { ChartsModule } from 'ng2-charts';
import { BarsComponent } from './charts/bars/bars.component'

@NgModule({
  declarations: [DashboardComponent, PieComponent, BarsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ChartsModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
