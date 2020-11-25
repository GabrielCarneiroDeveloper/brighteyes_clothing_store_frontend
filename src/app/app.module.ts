import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { EmployeeModule } from './employee/employee.module';
import { SalesModule } from './sales/sales.module';
import { CashierModule } from './cashier/cashier.module';
import { ClothesModule } from './clothes/clothes.module';
import { ClientModule } from './client/client.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { HotPageModule } from './hot-page/hot-page.module';

import { CommonComponentsModule } from './common/components/common-components.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { SocialLoginModule } from 'angularx-social-login';
import { ToastrModule } from 'ngx-toastr';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    // ChartsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AuthModule,
    HomeModule,
    EmployeeModule,
    SalesModule,
    CashierModule,
    ClothesModule,
    ClientModule,
    ShoppingCartModule,
    CommonComponentsModule,
    SharedModule,
    HotPageModule,
    SocialLoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
