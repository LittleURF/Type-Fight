import { GameScreenRouterService } from './../services/game-screen-router.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-game-screen',
	templateUrl: './game-screen.component.html',
	styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit {
	@Input() screen: Screen;

	constructor(private screenRouter: GameScreenRouterService) {}

	ngOnInit(): void {}

	navigate(path: string): void {
		// navigate with using the screen outlet name somehow
		this.screenRouter.navigate();
	}
}
