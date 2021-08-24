import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { override } from 'src/app/core/utilities/functional';
import { Game, GameConfig } from '../models/game';
import * as GameActions from './game.actions';

export interface State {
	game: Game;
	gameConfig: GameConfig;
}

export const initialState: State = {
	game: {
		isRunning: false,
		timerSeconds: 0,
	},
	gameConfig: {
		timerBaseAmountSeconds: 60,
	},
};

export const reducer = createReducer(
	initialState,
	on(GameActions.startGame, (state) => ({ ...state, game: override(state.game, { isRunning: true }) })),
	on(GameActions.finishGame, (state) => ({ ...state, game: override(state.game, { isRunning: false }) }))
);
