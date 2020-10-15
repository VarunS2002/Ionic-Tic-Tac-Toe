# Ionic-Tic-Tac-Toe

<!--## [Downloads](https://github.com/VarunS2002/Ionic-Tic-Tac-Toe/releases)-->
>[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![Build: passing](https://img.shields.io/badge/build-passing-brightgreen)

This is a fully fledged 2 or 1 player tic-tac-toe game written in TypeScript, HTML and SCSS using Ionic Framework which uses minimax algorithm with alpha beta pruning for Player vs Computer mode.
It can be exported to Android, iOS, Windows, PWA or a website.

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

-2 modes namely Player vs Computer (PvC) and Player vs Player (PvP)

-Default mode is Player vs Computer

-Button to change the mode

-In PvC mode, user always inputs X and the computer inputs O

-Start Button to let Computer start first 

-Uses Minimax algorithm with Alpha Beta Pruning for an unbeatable Computer

-In PvP mode, input X and O alternatively by clicking on the buttons in the grid

-First to start is X

-Alert Box shows you who won or if it's a draw

-Button and Pull to refresh to Restart Game

-Material Design

-Dark theme and Light theme with toggle

-Default theme on first run is Dark

-Animated Splash Screen


## Note:

-If you face any issue then feel free to open an issue on GitHub

## Screenshots:

-Light Theme:

![Screenshot_1](https://i.imgur.com/Kqe76Nc.png)

-Dark Theme:

![Screenshot_2](https://i.imgur.com/QJw1IVx.png)

-Winner Alert Box:

![Screenshot_3](https://i.imgur.com/cPfLnvg.png)
