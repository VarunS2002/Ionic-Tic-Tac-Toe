import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { LicensesPage } from "../licenses/licenses.page";

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {

  constructor(private modalController: ModalController) {
  }

  goHome() {
    // noinspection JSIgnoredPromiseFromCall
    this.modalController.dismiss();
  }

  async licensesPageModal() {
    const modal = await this.modalController.create({
      component: LicensesPage,
      cssClass: 'licenses-page'
    });
    return await modal.present();
  }
}
