import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotPageRoutingModule } from './hot-page-routing.module';
import { IndexModule } from './index/index.module';
import { HotPageComponent } from './hot-page.component';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from 'angularx-social-login';
import { environment } from './../../environments/environment';
import { SharedModule } from '../shared/shared.module';

import { LOCALE_ID } from '@angular/core';

@NgModule({
  declarations: [HotPageComponent],
  imports: [CommonModule, IndexModule, HotPageRoutingModule, SharedModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleClientId),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
})
export class HotPageModule {}
