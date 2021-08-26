import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SCREEN_CONFIG } from '../../injection-tokens';
import { Game } from '../../models/game';
import { State } from '../../state.index';
import { ScreenConfig } from '../screen-config';
import * as GameSelectors from '../../state/game.selectors';
import * as PlayActions from './state/play.actions';
import * as PlaySelectors from './state/play.selectors';
import { Screens } from '../../models/misc';
import { Screen } from '../../models/Screen';

@Component({
	selector: 'app-play',
	templateUrl: './play.component.html',
	styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
	playButtonPositionClasses: string = '';
	game$: Observable<Game>;
	screen$: Observable<Screen>;

	constructor(@Inject(SCREEN_CONFIG) private config: ScreenConfig, private store: Store<State>) {
		this.addPlayButtonPositionClasses();
	}

	ngOnInit(): void {
		this.game$ = this.store.select(GameSelectors.game);
		this.screen$ = this.store.select(PlaySelectors.screenState(this.config.whichScreen));
	}

	readyUp(): void {
		this.store.dispatch(PlayActions.readyUp({ whichScreen: this.config.whichScreen }));
	}

	private addPlayButtonPositionClasses(): void {
		this.playButtonPositionClasses = [
			this.config.whichScreen === Screens.left ? 'right-0' : 'left-0',
			this.config.whichScreen === Screens.left ? 'rounded-l-lg' : 'rounded-r-lg',
			this.config.whichScreen === Screens.left ? 'border-l-2' : 'border-r-2',
		].join(' ');
	}
}
