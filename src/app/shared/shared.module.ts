import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import { LoadingComponent } from './loading/loading.component'
import { LoadingService } from './loading/loading.service';

@NgModule({
  declarations: [HeaderComponent, LoadingComponent],
  imports: [CommonModule, RouterModule, MatMenuModule, MatButtonModule],
  exports: [HeaderComponent, LoadingComponent],
  providers: [LoadingService]
})
export class SharedModule {}
