import { createReducer, on } from '@ngrx/store';
import { Game, GameConfig } from '../models/game';
import * as GameActions from './game.actions';

export interface State extends Game {
	config: GameConfig;
}

export const initialState: State = {
	isRunning: false,
	timerSeconds: 0,
	config: {
		timerBaseAmountSeconds: 10,
	},
};

export const reducer = createReducer(
	initialState,
	on(GameActions.startGame, (state) => ({ ...state, isRunning: true, timerSeconds: state.config.timerBaseAmountSeconds })),
	on(GameActions.finishGame, (state) => ({ ...state, isRunning: false })),
	on(GameActions.decrementGameTimer, (state) => ({ ...state, timerSeconds: state.timerSeconds - 1 }))
);
