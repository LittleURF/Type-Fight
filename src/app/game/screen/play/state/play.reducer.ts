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
		toType: [],
	},
	rightScreen: {
		isReady: false,
		score: 0,
		toType: [],
	},
};

export const reducer = createReducer(
	initialState,
	on(PlayActions.readyUp, (state, action) => editScreenSpecific(state, action.whichScreen, (screen) => ({ ...screen, isReady: true }))),
	on(PlayActions.assignToTypeData, (state, action) => {
		const updatedLeftScreen = { ...state.leftScreen, toType: action.toTypeData[0] };
		const updatedRightScreen = { ...state.rightScreen, toType: action.toTypeData[1] };
		return { ...state, leftScreen: updatedLeftScreen, rightScreen: updatedRightScreen };
	}),
	on(GameActions.finishGame, (state) => editBothScreens(state, (screen) => ({ ...screen, isReady: false, toType: [] })))
);
