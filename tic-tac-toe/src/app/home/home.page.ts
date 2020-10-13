import { Component, Renderer2 } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from "rxjs";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  human: boolean;
  mode: string;
  data: [string[], string[], string[]];
  gameOver: boolean;
  scores: { X: number, O: number, T: number };
  subscription: Subscription;
  theme: string;

  constructor(
      private platform: Platform,
      public alertController: AlertController,
      private renderer: Renderer2
  ) {
    this.human = true;
    this.mode = 'PvC';
    this.data = [['', '', ''],
                 ['', '', ''],
                 ['', '', '']];
    this.gameOver = false;
    this.scores = {X: -1, O: 1, T: 0};
    this.theme = 'dark';
    this.toggleTheme( true);
  }

  ionViewDidEnter() {
      this.subscription = this.platform.backButton.subscribe(async () => {
        await this.alertExit() });
      this.toggleTheme(true);
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  move(id: string) {
    if (document.getElementById('startGame').innerHTML === 'Start') {
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
    else if (!this.human) {
        if (this.mode === 'PvP') {
            if (document.getElementById(id).innerHTML === '') {
                document.getElementById(id).innerHTML = 'O';
                this.data[Number(id.substr(0, 1))][Number(id.substr(1, 2))] = 'O';
                this.human = true;
            }
        }
    }
    if (this.mode==='PvC') {
        if (!this.human) {
            this.aiTurn()
            this.human = true;
        }
    }
      this.winning('check')
      if (this.gameOver) {
        return;
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
    if (document.getElementById('startGame').innerHTML === 'Start') {
      document.getElementById('startGame').innerHTML = 'Restart Game';
      this.aiTurn()
    }
    else if (document.getElementById('startGame').innerHTML === 'Restart Game') {
      this.restartGame()
    }
  }

  restartGame(event: any = null) {
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
    if (this.mode==='PvC') {
        document.getElementById('startGame').innerHTML = 'Start';
    }
    else {
        document.getElementById('startGame').innerHTML = 'Restart Game';
    }
    if (event!==null){
        setTimeout(() => {
            event.target.complete();
        }, 250);
    }
  }

  changeMode() {
        if (document.getElementById('mode').innerHTML === 'PvC') {
            this.mode = 'PvP';
            document.getElementById('mode').innerHTML = 'PvP';
        }
        else {
            this.mode = 'PvC'
            document.getElementById('mode').innerHTML = 'PvC';
        }
        this.restartGame()
    }

  async alertT() {
    const alert = await this.alertController.create({
      cssClass: 'alert-game-over',
      header: 'Game Over',
      message: 'Draw',
      buttons: ['OK'],
    })
    await alert.present();
  }

  async alertO() {
    let message: string;
    if (this.mode==='PvC') {
      message = 'You Lost';
    }
    else {
      message = 'O Won';
    }
    const alert = await this.alertController.create({
      cssClass : 'alert-game-over',
      header : 'Game Over',
      message: message,
      buttons : ['OK']
  })
    await alert.present();
  }

  async alertX() {
    let message: string;
    if (this.mode==='PvC') {
      message = 'You Won';
    }
    else {
      message = 'X Won';
    }
    const alert = await this.alertController.create({
    cssClass : 'alert-game-over',
    header : 'Game Over',
    message: message,
    buttons : ['OK']
    })
    await alert.present();
  }

  async alertExit() {
      const alert = await this.alertController.create({
        cssClass: 'alert-exit',
        header: 'Exit Game',
        message: 'Are you sure you want to exit the game ?',
        buttons: [
          {
            text: 'YES',
            handler: () => {
              navigator['app'].exitApp();
            }
          }, {
            text: 'NO',
            role: 'cancel'
          }
        ]
      })
      await alert.present();
  }

  toggleTheme(init: boolean = false) {
    if (init) {
      this.renderer.setAttribute(document.body,'color-theme','dark');
    }
    if (this.theme==='dark'){
      this.renderer.setAttribute(document.body,'color-theme','light');
      this.theme = 'light';
    }
    else {
      this.renderer.setAttribute(document.body,'color-theme','dark')
      this.theme = 'dark';
    }
  }
}
