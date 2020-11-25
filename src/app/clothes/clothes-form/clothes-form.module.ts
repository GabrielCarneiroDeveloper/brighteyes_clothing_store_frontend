import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothesFormComponent } from './clothes-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [ClothesFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FileUploadModule],
  exports: [ClothesFormComponent],
})
export class ClothesFormModule {}
