import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMujerPageRoutingModule } from './menu-mujer-routing.module';

import { MenuMujerPage } from './menu-mujer.page';
import { NgxPayPalModule } from 'ngx-paypal';
import { Modal2Page } from '../modal2/modal2.page';
import { ModalPage } from '../modal/modal.page';
import { Modal3Page } from '../modal3/modal3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMujerPageRoutingModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ],
  declarations: [MenuMujerPage,ModalPage,Modal2Page,Modal3Page]
})
export class MenuMujerPageModule {}
