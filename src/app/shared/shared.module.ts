import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatMenuModule, MatButtonModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
