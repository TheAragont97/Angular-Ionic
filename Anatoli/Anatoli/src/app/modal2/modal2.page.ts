import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.page.html',
  styleUrls: ['./modal2.page.scss'],
})
export class Modal2Page implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

}
