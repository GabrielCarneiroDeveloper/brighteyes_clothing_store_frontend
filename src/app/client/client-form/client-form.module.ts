import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ClientFormComponent],
})
export class ClientFormModule {}
