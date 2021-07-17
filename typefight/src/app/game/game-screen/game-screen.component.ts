import { GameScreenRouterService } from './../services/game-screen-router.service';
import { Component, Input, OnInit } from '@angular/core';
import { Screen } from '../models';

@Component({
	selector: 'app-game-screen',
	templateUrl: './game-screen.component.html',
	styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit {
	@Input() screen: Screen;

	constructor(private screenRouter: GameScreenRouterService) {}

	ngOnInit(): void {}
}
