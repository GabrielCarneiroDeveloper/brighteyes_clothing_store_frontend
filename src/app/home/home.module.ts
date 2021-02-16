import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from './../shared/shared.module';

import { DashboardModule } from './../core/dashboard/dashboard.module';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule,
    DashboardModule,
    ShoppingCartModule,
    MatIconModule,
    HttpClientModule,
    OverlayModule,
  ],
})
export class HomeModule {}
