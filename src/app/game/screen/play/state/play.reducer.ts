import { createReducer, on } from '@ngrx/store';
import { Screen } from 'src/app/game/models/Screen';
import * as PlayActions from './play.actions';
import * as GameActions from '../../../state/game.actions';
import { editBothScreens, editScreenSpecific } from './play.reducer.util';

export interface State {
	leftScreen: Screen;
	rightScreen: Screen;
}

export const initialState: State = {
	leftScreen: {
		isReady: false,
		score: 0,
		words: [],
	},
	rightScreen: {
		isReady: false,
		score: 0,
		words: [],
	},
};

export const reducer = createReducer(
	initialState,
	on(PlayActions.readyUp, (state, action) => editScreenSpecific(state, action.whichScreen, (screen) => ({ ...screen, isReady: true }))),
	on(PlayActions.assignWords, (state, action) => {
		const updatedLeftScreen = { ...state.leftScreen, words: action.wordsCollections[0] };
		const updatedRightScreen = { ...state.rightScreen, words: action.wordsCollections[1] };
		return { ...state, leftScreen: updatedLeftScreen, rightScreen: updatedRightScreen };
	}),
	on(GameActions.finishGame, (state) => editBothScreens(state, (screen) => ({ ...screen, isReady: false, words: [] })))
);
