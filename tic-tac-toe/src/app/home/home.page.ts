import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  f: number;
  data: [string[], string[], string[]];
  gameOver: boolean;
  ids: string[];

  constructor() {
    this.f = 0;
    this.data = [['', '', ''],
                 ['', '', ''],
                 ['', '', '']];
    this.gameOver = false;
  }

  callback(id: string) {
    if (this.gameOver) {
      return;
    }
    if (this.f === 0) {
      if (document.getElementById(id).innerHTML === '') {
        document.getElementById(id).innerHTML = 'X';
        this.data[Number((id.substr(0,1)))][Number(id.substr(1,2))] = 'X';
        this.f += 1;
      }
    } else if (this.f === 1) {
      if (document.getElementById(id).innerHTML === '') {
        document.getElementById(id).innerHTML = 'O';
        this.data[Number((id.substr(0,1)))][Number(id.substr(1,2))] = 'O';
        this.f -= 1;
      }
    }
    this.check(id);
  }

  result(winner: boolean = true) {
    if (winner) {
      if (this.f === 0) {
        this.alert_O();
      } else if (this.f === 1) {
        this.alert_X();
      }
    } else {
      this.alert_draw();
    }
    this.gameOver = true;
  }

  new_game() {
    this.f = 0;
    this.data = [['', '', ''], ['', '', ''], ['', '', '']];
    this.gameOver = false;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        document.getElementById(String(x) + String(y)).innerHTML = '';
      }
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

  check(id: string) {
    if (this.gameOver) {
      return;
    }
    if (id === '00') {
      if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2]) {
        this.result();
        return;
      } else if (this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0]) {
        this.result();
        return;
      } else if (this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2]) {
        this.result();
        return;
      }
    } else if (id === '01') {
      if (this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1]) {
        this.result();
        return;
      } else if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2]) {
        this.result();
        return;
      }
    } else if (id === '02') {
      if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2]) {
        this.result();
        return;
      } else if (this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2]) {
        this.result();
        return;
      } else if (this.data[0][2] === this.data[1][1] && this.data[1][1] === this.data[2][0]) {
        this.result();
        return;
      }
    } else if (id === '10') {
      if (this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0]) {
        this.result();
        return;
      } else if (this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2]) {
        this.result();
        return;
      }
    } else if (id === '11') {
      if (this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2]) {
        this.result();
        return;
      } else if (this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1]) {
        this.result();
        return;
      } else if (this.data[0][2] === this.data[1][1] && this.data[1][1] === this.data[2][0]) {
        this.result();
        return;
      } else if (this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2]) {
        this.result();
        return;
      }

    } else if (id === '12') {
      if (this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2]) {
        this.result();
        return;
      } else if (this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2]) {
        this.result();
        return;
      }
    } else if (id === '20') {
      if (this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0]) {
        this.result();
        return;
      } else if (this.data[0][2] === this.data[1][1] && this.data[1][1] === this.data[2][0]) {
        this.result();
        return;
      } else if (this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2]) {
        this.result();
        return;
      }
    } else if (id === '21') {
      if (this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2]) {
        this.result();
        return;
      } else if (this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1]) {
        this.result();
        return;
      }
    } else if (id === '22') {
      if (this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2]) {
        this.result();
        return;
      } else if (this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2]) {
        this.result();
        return;
      } else if (this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2]) {
        this.result();
        return;
      }
    }
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (this.data[x][y] === '') {
            return;
        }
      }
    }
    this.result(false);
  }
}
