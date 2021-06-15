import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMujerPage } from './menu-mujer.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMujerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMujerPageRoutingModule {}
