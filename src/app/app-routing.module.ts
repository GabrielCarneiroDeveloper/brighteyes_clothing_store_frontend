import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { LoginGuard } from './auth/guards/login.guard';
import { CashierGuard } from './auth/guards/cashier.guard';
import { HrGuard } from './auth/guards/hr.guard';
import { SellerGuard } from './auth/guards/seller.guard';
import { CustomerServiceGuard } from './auth/guards/csc.guard';
import { WarehouseGuard } from './auth/guards/warehouse.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hot-page',
  },
  {
    path: 'admin',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'hot-page',
    loadChildren: './hot-page/hot-page.module#HotPageModule',
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'employee',
    loadChildren: './employee/employee.module#EmployeeModule',
    canActivate: [AuthGuard, HrGuard],
  },
  // {
  //   path: 'sales',
  //   loadChildren: './sales/sales.module#SalesModule',
  //   canActivate: [AuthGuard, SellerGuard],
  // },
  {
    path: 'cashier',
    loadChildren: './cashier/cashier.module#CashierModule',
    canActivate: [AuthGuard, CashierGuard],
  },
  {
    path: 'client',
    loadChildren: './client/client.module#ClientModule',
    canActivate: [AuthGuard, CustomerServiceGuard],
  },
  {
    path: 'clothes',
    loadChildren: './clothes/clothes.module#ClothesModule',
    canActivate: [AuthGuard, WarehouseGuard],
  },
  {
    path: 'shopping-cart',
    loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartModule',
    canActivate: [AuthGuard, SellerGuard],
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
