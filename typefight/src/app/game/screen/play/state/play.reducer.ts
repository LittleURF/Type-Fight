import { createReducer, on } from '@ngrx/store';
import { Screen, Screens } from 'src/app/game/models/Screen';
import * as PlayActions from './play.actions';

export interface State {
	leftScreen: Screen;
	rightScreen: Screen;
}

export const initialState: State = {
	leftScreen: {
		isReady: false,
		score: 0,
	},
	rightScreen: {
		isReady: false,
		score: 0,
	},
};

export const reducer = createReducer(
	initialState,
	on(PlayActions.readyUp, (state, action) => editScreenSpecific(state, action.whichScreen, (screen) => ({ ...screen, isReady: true })))
);

const editScreenSpecific = (state: State, whichScreen: Screens, handler: (screen: Screen) => Screen): State => {
	const screen = state[whichScreen];
	const updatedScreen = handler(screen);
	state[whichScreen] = updatedScreen;
	return state;
};
