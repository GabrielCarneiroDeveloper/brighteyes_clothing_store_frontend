import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientTableComponent } from './client-table.component';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  declarations: [ClientTableComponent],
  imports: [CommonModule, ExportAsModule],
  exports: [ClientTableComponent],
})
export class ClientTableModule {}
