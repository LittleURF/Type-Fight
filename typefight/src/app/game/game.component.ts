import { Component, Inject, OnInit } from '@angular/core';
import { IGameManagerService } from './services/game.service';
import { map, filter } from 'rxjs/operators';
import { I_GAME_MANAGER_SERVICE } from './injection-tokens';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
	constructor(@Inject(I_GAME_MANAGER_SERVICE) private gameManagerService: IGameManagerService) {}

	bothScreensReady$ = this.gameManagerService.screens$.pipe(
		map((screens) => screens.map((screen) => screen.isReady)),
		filter((isReadyArr) => isReadyArr.every((isReady) => isReady))
	);

	ngOnInit(): void {
		this.bothScreensReady$.subscribe((_) => this.gameManagerService.start());
	}
}
