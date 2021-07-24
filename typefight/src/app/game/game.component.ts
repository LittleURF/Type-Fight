import { Component } from '@angular/core';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
})
export class GameComponent {
	// In this place I'd like to know both of their states, like a general GameService
	// How to control both the screens? events? inputs?
	// a service injected in all 3 places?
	// handle when the need actually arises...
	constructor() {}
}
