import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificadoEmailPageRoutingModule } from './verificado-email-routing.module';

import { VerificadoEmailPage } from './verificado-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificadoEmailPageRoutingModule
  ],
  declarations: [VerificadoEmailPage]
})
export class VerificadoEmailPageModule {}
