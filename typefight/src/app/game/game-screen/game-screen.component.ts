import { Component, Input } from '@angular/core';
import { Screen } from '../models';


@Component({
	selector: 'app-game-screen',
	templateUrl: './game-screen.component.html',
	styleUrls: ['./game-screen.component.scss'],
	providers: [{ provide: 'id', useFactory: asd }],
})
// use factory to somehow determine what screen is it currently. fe. there are 2 screens in config. every time it gets returned it gets popped. that way 2 components can work.
export class GameScreenComponent {
	@Input() screene: Screen;

	constructor() {}
}
