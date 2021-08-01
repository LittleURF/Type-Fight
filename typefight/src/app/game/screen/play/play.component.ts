import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { I_GAME_COSNUMER_SERVICE, SCREEN_CONFIG } from '../../injection-tokens';
import { Game } from '../../models/game';
import { IGameConsumerService } from '../../services/game.service';
import { ScreenConfig } from '../screen-config';

@Component({
	selector: 'app-play',
	templateUrl: './play.component.html',
	styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
	playButtonPositionClasses: string[] = [];
	game$: Observable<Game>;

	constructor(
		@Inject(SCREEN_CONFIG) private config: ScreenConfig,
		@Inject(I_GAME_COSNUMER_SERVICE) private gameConsumerService: IGameConsumerService
	) {
		// Dont care
		this.playButtonPositionClasses.push(this.config.outletName === 'leftScreen' ? 'right-0' : 'left-0');
		this.playButtonPositionClasses.push(this.config.outletName === 'leftScreen' ? 'rounded-l-lg' : 'rounded-r-lg');
		this.playButtonPositionClasses.push(this.config.outletName === 'leftScreen' ? 'border-l-2' : 'border-r-2');
	}

	ngOnInit(): void {
		this.game$ = this.gameConsumerService.game$;
	}

	readyUp(): void {
		this.gameConsumerService.readyUp(this.config.outletName);
	}
}
