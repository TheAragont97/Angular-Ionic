import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificadoEmailPage } from './verificado-email.page';

const routes: Routes = [
  {
    path: '',
    component: VerificadoEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificadoEmailPageRoutingModule {}
