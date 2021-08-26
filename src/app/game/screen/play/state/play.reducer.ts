import { createReducer, on } from '@ngrx/store';
import { Screen, Screens } from 'src/app/game/models/Screen';
import * as PlayActions from './play.actions';
import * as GameActions from '../../../state/game.actions';

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
	on(PlayActions.readyUp, (state, action) => editScreenSpecific(state, action.whichScreen, (screen) => ({ ...screen, isReady: true }))),
	on(GameActions.finishGame, (state) => editBothScreens(state, (screen) => ({ ...screen, isReady: false })))
);

const editBothScreens = (state: State, handler: (screen: Screen) => Screen): State => {
	const updatedLeftScreen = handler(state.leftScreen);
	const updatedRightScreen = handler(state.leftScreen);

	return { ...state, leftScreen: updatedLeftScreen, rightScreen: updatedRightScreen };
};

const editScreenSpecific = (state: State, whichScreen: Screens, handler: (screen: Screen) => Screen): State => {
	const updatedScreen = handler(state[whichScreen]);

	if (whichScreen === Screens.left) {
		return { ...state, leftScreen: updatedScreen };
	} else if (whichScreen === Screens.right) {
		return { ...state, rightScreen: updatedScreen };
	}
};
