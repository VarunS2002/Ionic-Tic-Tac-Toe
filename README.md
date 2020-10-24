# Ionic-Tic-Tac-Toe

<!--## [Downloads](https://github.com/VarunS2002/Ionic-Tic-Tac-Toe/releases)-->
## [Play Online](https://varuns2002.github.io/Ionic-Tic-Tac-Toe/)
>[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![Build: passing](https://img.shields.io/badge/build-passing-brightgreen)

This is a fully fledged 2 or 1 player tic-tac-toe game written in TypeScript, HTML and SCSS using Ionic Framework which uses minimax algorithm with alpha beta pruning for Single Player mode.
It can be exported to Android, iOS, Windows, MacOS, PWA or a Web App.

## Hosted on:
 
>https://varuns2002.github.io/Ionic-Tic-Tac-Toe/ 

## Requirements:

- [Node.js with npm](https://nodejs.org/en/download/)

## Installation:

>Steps for installing Ionic CLI and required packages

- Clone this repository

- Set current working directory to tic-tac-toe

- Run `npm install`

- This will install all the required packages

>Steps for running on a Browser

- Run `ionic serve`  

- This will compile the program and run it on `http://localhost:8100` (port may vary) to use on your browser

>Steps for exporting to Android

- Minimum Android Version Required : Android 7.0 Nougat (API Level 24)

- To export as an Android app run `ionic cordova build android`

- This will export a debug build of the apk file which can be installed on an Android phone or emulator  

## Features:

-2 modes namely Single Player (1P) and Multi Player (2P)

-Default mode is Single Player

-Button to change the mode

-Label showing current mode

-In 1P mode, user always inputs X and the computer inputs O

-Start Button to let Computer start first 

-Uses Minimax algorithm with Alpha Beta Pruning for an unbeatable Computer

-In 2P mode, input X and O alternatively by clicking on the buttons in the grid

-First to start is X

-Label showing which is the next player in 2P mode

-Alert Box shows you who won or if it's a draw

-Button to Restart Game

-Labels showing scores of X, O and Draws

-Pull to Refresh or Change Mode to reset scores and restart game

-Dark theme and Light theme with toggle

-Default theme on first run is Dark

-Material Design

-Animated Splash Screen


## Note:

-If you face any issue then feel free to open an issue on GitHub

## Screenshots:

-Light Theme:

![Screenshot_1](https://i.imgur.com/Eh3U9c4.png)

-Dark Theme:

![Screenshot_2](https://i.imgur.com/fbt9aNM.png)

-Winner Alert Box:

![Screenshot_3](https://i.imgur.com/thqxtct.png)
