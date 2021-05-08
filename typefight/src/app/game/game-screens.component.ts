import { Component } from '@angular/core';

interface Screen {
  outletName: string
}

@Component({
	selector: 'app-game-screens',
	templateUrl: './game-screens.component.html',
	styleUrls: ['./game-screens.component.scss'],
})
export class GameScreensComponent {
  screens: Screen[] = [
    { outletName: 'leftScreen'},
    { outletName: 'rightScreen'},
  ]

	constructor() {}
}
