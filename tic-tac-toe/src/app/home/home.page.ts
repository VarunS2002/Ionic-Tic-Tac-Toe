import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from "rxjs";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  human: boolean;
  data: [string[], string[], string[]];
  gameOver: boolean;
  scores: { X: number, O: number, T: number };
  subscription: Subscription;
  lastTimeBackPress: number;

  constructor(
      private platform: Platform,
      public toastController: ToastController
  ) {
    this.human = true;
    this.data = [['', '', ''],
                 ['', '', ''],
                 ['', '', '']];
    this.gameOver = false;
    this.scores = {X: -1, O: 1, T: 0};
    this.lastTimeBackPress = 0;
  }

  ionViewDidEnter() {
    const timePeriodToExit = 1500;
    this.subscription = this.platform.backButton.subscribe(async () => {
      if (new Date().getTime() - this.lastTimeBackPress < timePeriodToExit) {
        navigator['app'].exitApp();
      } else {
        const toast = await this.toastController.create({
          message: 'Press again to exit',
          duration: 1500
        });
        await toast.present();
        this.lastTimeBackPress = new Date().getTime();
      }
    });
  }

  move(id: string) {
    if (document.getElementById('startGame').innerHTML === 'Start AI') {
      document.getElementById('startGame').innerHTML = 'Restart Game';
    }
    if (this.gameOver) {
      return;
    }
    if (this.human) {
      if (document.getElementById(id).innerHTML === '') {
        document.getElementById(id).innerHTML = 'X';
        this.data[Number(id.substr(0, 1))][Number(id.substr(1, 2))] = 'X';
        this.human = false;
        this.winning('check')
        if (this.gameOver) {
          return;
        }
      }
    }
    if (!this.human) {
      this.aiTurn()
      this.human = true;
      this.winning('check')
      if (this.gameOver) {
        return;
      }
    }
  }

  aiTurn() {
    let bestScore = -Infinity;
    let bestMove;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (this.data[x][y] === '') {
          this.data[x][y] = 'O';
          let score = this.minimax(false);
          this.data[x][y] = '';
          if (score > bestScore) {
            bestScore = score;
            bestMove = {x, y};
          }
        }
      }
    }
    this.data[bestMove.x][bestMove.y] = 'O';
    document.getElementById(String(bestMove.x) + String(bestMove.y)).innerHTML = 'O';
  }

  minimax(isMaximizing: boolean): number {
    let result = this.winning('minimax')
    if (result !== null) {
      return this.scores[result];
    }
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          if (this.data[x][y] === '') {
            this.data[x][y] = 'O';
            let score = this.minimax(false)
            this.data[x][y] = '';
            bestScore = Math.max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          if (this.data[x][y] === '') {
            this.data[x][y] = 'X';
            let score = this.minimax(true)
            this.data[x][y] = '';
            bestScore = Math.min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }


  winning(mode: string) {
    let player;
    let availableSpots = 0;
    if (mode === 'minimax') {
      player = 'X';
      if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2] && this.data[0][2] === player ||
          this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2] && this.data[1][2] === player ||
          this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2] && this.data[2][2] === player ||
          this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0] && this.data[2][0] === player ||
          this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1] && this.data[2][1] === player ||
          this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2] && this.data[2][2] === player ||
          this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2] && this.data[2][2] === player ||
          this.data[2][0] === this.data[1][1] && this.data[1][1] === this.data[0][2] && this.data[0][2] === player) {
        return 'X';
      }
      player = 'O';
      if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2] && this.data[0][2] === player ||
          this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2] && this.data[1][2] === player ||
          this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2] && this.data[2][2] === player ||
          this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0] && this.data[2][0] === player ||
          this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1] && this.data[2][1] === player ||
          this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2] && this.data[2][2] === player ||
          this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2] && this.data[2][2] === player ||
          this.data[2][0] === this.data[1][1] && this.data[1][1] === this.data[0][2] && this.data[0][2] === player) {
        return 'O';
      }
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          if (this.data[x][y] === '') {
            availableSpots++;
          }
        }
      }
      if (availableSpots === 0) {
        return 'T';
      }
      return null;
    } else if (mode === 'check') {
      player = 'X';
      if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2] && this.data[0][2] === player ||
          this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2] && this.data[1][2] === player ||
          this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2] && this.data[2][2] === player ||
          this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0] && this.data[2][0] === player ||
          this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1] && this.data[2][1] === player ||
          this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2] && this.data[2][2] === player ||
          this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2] && this.data[2][2] === player ||
          this.data[2][0] === this.data[1][1] && this.data[1][1] === this.data[0][2] && this.data[0][2] === player) {
        this.alertX()
        this.gameOver = true;
        return;
      }
      player = 'O';
      if (this.data[0][0] === this.data[0][1] && this.data[0][1] === this.data[0][2] && this.data[0][2] === player ||
          this.data[1][0] === this.data[1][1] && this.data[1][1] === this.data[1][2] && this.data[1][2] === player ||
          this.data[2][0] === this.data[2][1] && this.data[2][1] === this.data[2][2] && this.data[2][2] === player ||
          this.data[0][0] === this.data[1][0] && this.data[1][0] === this.data[2][0] && this.data[2][0] === player ||
          this.data[0][1] === this.data[1][1] && this.data[1][1] === this.data[2][1] && this.data[2][1] === player ||
          this.data[0][2] === this.data[1][2] && this.data[1][2] === this.data[2][2] && this.data[2][2] === player ||
          this.data[0][0] === this.data[1][1] && this.data[1][1] === this.data[2][2] && this.data[2][2] === player ||
          this.data[2][0] === this.data[1][1] && this.data[1][1] === this.data[0][2] && this.data[0][2] === player) {
        this.alertO()
        this.gameOver = true;
        return;
      }
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          if (this.data[x][y] === '') {
            availableSpots++;
          }
        }
      }
      if (availableSpots === 0) {
        this.alertT()
        this.gameOver = true;
        return;
      }
    }
  }

  startGame() {
    if (document.getElementById('startGame').innerHTML === 'Start AI') {
      document.getElementById('startGame').innerHTML = 'Restart Game';
      this.aiTurn()
    }
    else if (document.getElementById('startGame').innerHTML === 'Restart Game') {
      this.restartGame()
      document.getElementById('startGame').innerHTML = 'Start AI';
    }
  }

  restartGame() {
    this.human = true;
    this.data = [['', '', ''],
                 ['', '', ''],
                 ['', '', '']];
    this.gameOver = false;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        document.getElementById(String(x) + String(y)).innerHTML = '';
      }
    }
  }

  alertT() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Game Over';
    alert.message = 'Draw';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }

  alertO() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Game Over';
    alert.message = 'You Lost';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }

  alertX() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Game Over';
    alert.message = 'You won';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }
}
