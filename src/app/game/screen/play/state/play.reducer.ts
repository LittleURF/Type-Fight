import { createReducer, on } from '@ngrx/store';
import { Screen } from 'src/app/game/models/Screen';
import * as PlayActions from './play.actions';
import * as GameActions from '../../../state/game.actions';
import { Word } from 'src/app/game/models/word';
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
	on(GameActions.startGame, (state) => editBothScreens(state, (screen) => ({ ...screen, words: generateWords() }))),
	on(GameActions.finishGame, (state) => editBothScreens(state, (screen) => ({ ...screen, isReady: false, words: [] })))
);

// can then seperate out the methods to different files for cleaner code
const generateWords = (): Word[] => {
	const availableWords = ['Hello', 'This', 'Is', 'My', 'Roommate', 'Steve', 'And', 'This', 'Has', 'Been', 'Bojack', 'Horseman'];

	return availableWords.map((word) => new Word(word));
};
