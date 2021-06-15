import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuHombrePage } from './menu-hombre.page';

const routes: Routes = [
  {
    path: '',
    component: MenuHombrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuHombrePageRoutingModule {}
