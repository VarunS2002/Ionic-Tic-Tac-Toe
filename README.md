# Ionic-Tic-Tac-Toe

## Play Online:

> ### [Firebase](https://tic-tac-toe-vs2002.web.app/)
>
>### [GitHub Pages](https://varuns2002.github.io/Ionic-Tic-Tac-Toe/)

## [Downloads](https://github.com/VarunS2002/Ionic-Tic-Tac-Toe/releases)

> [![APK: v1.1.1](https://img.shields.io/badge/APK-v1.1.1-brightgreen)](https://github.com/VarunS2002/Ionic-Tic-Tac-Toe/releases/download/1.1.1/Tic-Tac-Toe-1.1.1.apk)
> [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This is a fully fledged 2 or 1 player tic-tac-toe game written in TypeScript, HTML and SCSS using Ionic Framework and
uses Cordova for the Android app.

This app uses minimax algorithm with alpha beta pruning for Single Player mode.

It can be exported to Android, iOS, Windows, MacOS, PWA or a Web App.

## Installation & Usage:

- Can be played online in the browser. See [Play Online](#play-online)

- Can be installed as a Progressive Web App on any platform.
  See [Use Progressive Web Apps](https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=en)

- Can be installed as an Android app. See [Downloads](https://github.com/VarunS2002/Ionic-Tic-Tac-Toe/releases)

## Building:

### Requirements:

- [Node.js with npm](https://nodejs.org/en/download/)

### Installing required packages

1. Clone this repository

2. Set current working directory to tic-tac-toe

3. Run `npm install`

- This will install all the required packages

> #### Steps for running on a Browser

1. Set current working directory to tic-tac-toe

2. Run `ionic serve`

- This will compile the program and run it on `http://localhost:8100` (port may vary) to use on your browser

> #### Steps for exporting to Android

1. Set current working directory to tic-tac-toe

2. To export as an Android app run `ionic cordova build android`

- This will export a debug build of the apk file which can be installed on an Android phone or emulator

- Minimum Android Version Required : Android 7.0 Nougat (API Level 24)

## Features:

- 2 modes namely Single Player (1P) and Multi Player (2P)

- Default mode is Single Player

- Button to change the mode

- Label showing current mode

- In 1P mode, user always inputs X and the computer inputs O

- Start Button to let Computer start first

- Uses Minimax algorithm with Alpha Beta Pruning for an unbeatable Computer

- In 2P mode, input X and O alternatively by clicking on the buttons in the grid

- First to start is X

- Label showing which is the next player in 2P mode

- Alert Box shows you who won or if it's a draw

- Button to Restart Game

- Labels showing scores of X, O and Draws

- Pull to Refresh or Change Mode to reset scores and restart game

- Dark theme and Light theme with toggle

- About page with version and links for developer's GitHub profile, releases, README, source code, license

- Third Party Licenses page

- Default theme on first run is Dark

- Material Design

- Animated Splash Screen

## Note:

- If you face any issue then feel free to open an issue on GitHub

## Screenshots:

- Light Theme:<br><br>

  ![Light](https://i.imgur.com/C9GGYVl.png)


- Dark Theme:<br><br>

  ![Dark](https://i.imgur.com/i8laiKh.png)


- Winner Alert Box:<br><br>

  ![Result](https://i.imgur.com/JZwnsSI.png)
