import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromGame from './state/game.reducer';
import * as fromPlay from './screen/play/state/play.reducer';

export const featureKey = 'game';

export interface State {
	game: fromGame.State;
	play: fromPlay.State;
}

export const reducers: ActionReducerMap<AppState> = {
	game: fromGame.reducer,
	play: fromPlay.reducer,
};

export const selectFeatureState = createFeatureSelector<State>(featureKey);
