import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  f: number;
  data: string[];
  gameOver: boolean;

  constructor() {
    this.f = 0;
    this.data = ['', '', '', '', '', '', '', '', ''];
    this.gameOver = false;
  }

  callback(id: number) {
    if (this.gameOver){
      return;
    }
    if (this.f === 0) {
      if (document.getElementById(id.toString()).innerHTML === '') {
        document.getElementById(id.toString()).innerHTML = 'X';
        this.data[id] = 'X';
        this.f += 1;
      }
    } else if (this.f === 1) {
      if (document.getElementById(id.toString()).innerHTML === '') {
        document.getElementById(id.toString()).innerHTML = 'O';
        this.data[id] = 'O';
        this.f -= 1;
      }
    }
    this.check(id);
  }

  result(winner: boolean = true) {
    if (winner){
      if (this.f === 0) {
        this.alert_O();
      } else if (this.f === 1) {
        this.alert_X();
      }
    }
    else {
      this.alert_draw();
    }
    this.gameOver = true;
  }

  new_game() {
    this.f = 0;
    this.data = ['', '', '', '', '', '', '', '', ''];
    this.gameOver = false;
    for (let i = 0; i < 9; i++) {
      document.getElementById(i.toString()).innerHTML = '';
    }
  }

  alert_draw() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Game Over';
    alert.message = 'Draw';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }

  alert_O() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Game Over';
    alert.message = 'O won';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }
  alert_X() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Game Over';
    alert.message = 'X won';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }

  check(id: number) {
    if (this.gameOver){
      return;
    }
    if (id === 0) {
      if (this.data[0] === this.data[1] && this.data[1] === this.data[2]) {
        this.result();
        return;
      } else if (this.data[0] === this.data[3] && this.data[3] === this.data[6]) {
        this.result();
        return;
      } else if (this.data[0] === this.data[4] && this.data[4] === this.data[8]) {
        this.result();
        return;
      }
    } else if (id === 1) {
      if (this.data[0] === this.data[1] && this.data[1] === this.data[2]) {
        this.result();
        return;
      } else if (this.data[1] === this.data[4] && this.data[4] === this.data[7]) {
        this.result();
        return;
      }
    } else if (id === 2) {
      if (this.data[0] === this.data[1] && this.data[1] === this.data[2]) {
        this.result();
        return;
      } else if (this.data[2] === this.data[5] && this.data[5] === this.data[8]) {
        this.result();
        return;
      } else if (this.data[2] === this.data[4] && this.data[4] === this.data[6]) {
        this.result();
        return;
      }
    } else if (id === 3) {
      if (this.data[0] === this.data[3] && this.data[3] === this.data[6]) {
        this.result();
        return;
      } else if (this.data[3] === this.data[4] && this.data[4] === this.data[5]) {
        this.result();
        return;
      }
    } else if (id === 4) {
      if (this.data[1] === this.data[4] && this.data[4] === this.data[7]) {
        this.result();
        return;
      } else if (this.data[3] === this.data[4] && this.data[4] === this.data[5]) {
        this.result();
        return;
      } else if (this.data[0] === this.data[4] && this.data[4] === this.data[8]) {
        this.result();
        return;
      } else if (this.data[2] === this.data[4] && this.data[4] === this.data[6]) {
        this.result();
        return;
      }

    } else if (id === 5) {
      if (this.data[2] === this.data[5] && this.data[5] === this.data[8]) {
        this.result();
        return;
      } else if (this.data[3] === this.data[4] && this.data[4] === this.data[5]) {
        this.result();
        return;
      }
    } else if (id === 6) {
      if (this.data[0] === this.data[3] && this.data[3] === this.data[6]) {
        this.result();
        return;
      } else if (this.data[2] === this.data[4] && this.data[4] === this.data[6]) {
        this.result();
        return;
      } else if (this.data[6] === this.data[7] && this.data[7] === this.data[8]) {
        this.result();
        return;
      }
    } else if (id === 7) {
      if (this.data[6] === this.data[7] && this.data[7] === this.data[8]) {
        this.result();
        return;
      } else if (this.data[1] === this.data[4] && this.data[4] === this.data[7]) {
        this.result();
        return;
      }
    } else if (id === 8) {
      if (this.data[2] === this.data[5] && this.data[5] === this.data[8]) {
        this.result();
        return;
      } else if (this.data[0] === this.data[4] && this.data[4] === this.data[8]) {
        this.result();
        return;
      } else if (this.data[6] === this.data[7] && this.data[7] === this.data[8]) {
        this.result();
        return;
      }
    }
    if (this.data.every(element => element !== '') === true) {
      this.result(false);
    }
  }
}
