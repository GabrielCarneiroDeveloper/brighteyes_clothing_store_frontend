import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothesComponent } from './clothes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ClothesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClothesRoutingModule {}
