import { Component } from '@angular/core';
import { Screen } from './models';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
})
export class GameComponent {
	screens: Screen[] = [{ outletName: 'leftScreen' }, { outletName: 'rightScreen' }];

	constructor() {}
}
