import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SCREEN_CONFIG } from '../../injection-tokens';
import { Game } from '../../models/game';
import { Screens } from '../../models/Screen';
import { State } from '../../state.index';
import { ScreenConfig } from '../screen-config';
import * as GameSelectors from '../../state/game.selectors';
import * as PlayActions from './state/play.actions';

@Component({
	selector: 'app-play',
	templateUrl: './play.component.html',
	styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
	playButtonPositionClasses: string[] = [];
	game$: Observable<Game>;

	constructor(@Inject(SCREEN_CONFIG) private config: ScreenConfig, private store: Store<State>) {
		// Dont care
		this.playButtonPositionClasses.push(this.config.whichScreen === Screens.left ? 'right-0' : 'left-0');
		this.playButtonPositionClasses.push(this.config.whichScreen === Screens.left ? 'rounded-l-lg' : 'rounded-r-lg');
		this.playButtonPositionClasses.push(this.config.whichScreen === Screens.left ? 'border-l-2' : 'border-r-2');
	}

	ngOnInit(): void {
		this.game$ = this.store.select(GameSelectors.game);
	}

	readyUp(): void {
		this.store.dispatch(PlayActions.readyUp({ whichScreen: this.config.whichScreen }));
	}
}
