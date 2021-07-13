import { Component } from '@angular/core';

interface Screen {
	outletName: string;
}

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
})
export class GameComponent {
	screens: Screen[] = [{ outletName: 'leftScreen' }, { outletName: 'rightScreen' }];

	constructor() {}
}
