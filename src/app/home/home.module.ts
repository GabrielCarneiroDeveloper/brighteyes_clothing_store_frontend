import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from './../shared/shared.module';

import { DashboardModule } from './../core/dashboard/dashboard.module'
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, RouterModule, SharedModule, DashboardModule, ShoppingCartModule],
})
export class HomeModule {}
