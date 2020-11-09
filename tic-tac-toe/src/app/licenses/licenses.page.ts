import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.page.html',
  styleUrls: ['./licenses.page.scss'],
})
export class LicensesPage {

  constructor(private modalController: ModalController) {
  }

  goBack() {
    // noinspection JSIgnoredPromiseFromCall
    this.modalController.dismiss();
  }
}
