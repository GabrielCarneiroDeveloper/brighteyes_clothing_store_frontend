import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotPageComponent } from './hot-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HotPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotPageRoutingModule {}
