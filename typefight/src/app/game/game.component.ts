import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';
import { map, filter } from 'rxjs/operators';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
	constructor(private gameService: GameService) {}

	bothScreensReady$ = this.gameService.screens$.pipe(
		map((screens) => screens.map((screen) => screen.isReady)),
		filter((isReadyArr) => isReadyArr.every((isReady) => isReady))
	);

	ngOnInit(): void {
		this.bothScreensReady$.subscribe((_) => this.gameService.start());
	}
}
