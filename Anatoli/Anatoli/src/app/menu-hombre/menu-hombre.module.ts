import { ModalPage } from './../modal/modal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuHombrePageRoutingModule } from './menu-hombre-routing.module';

import { MenuHombrePage } from './menu-hombre.page';
import { NgxPayPalModule } from 'ngx-paypal';
import { Modal2Page } from '../modal2/modal2.page';
import { Modal3Page } from '../modal3/modal3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuHombrePageRoutingModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ],
  declarations: [MenuHombrePage,ModalPage,Modal2Page,Modal3Page]
})
export class MenuHombrePageModule {}
