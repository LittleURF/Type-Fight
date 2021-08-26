import { createSelector } from '@ngrx/store';
import { Screens } from 'src/app/game/models/misc';
import * as fromFeature from '../../../state.index';

export const playState = createSelector(fromFeature.selectFeatureState, (state) => state.play);
export const screenState = (whichScreen: Screens) => createSelector(playState, (state) => state[whichScreen]);

export const playerReady = (whichScreen: Screens) => createSelector(screenState(whichScreen), (screen) => screen.isReady);
export const bothPlayersReady = createSelector(playState, (state) => state.leftScreen.isReady && state.rightScreen.isReady);
