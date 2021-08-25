import { createSelector } from '@ngrx/store';
import * as fromFeature from '../../../state.index';

const playState = createSelector(fromFeature.selectFeatureState, (state) => state.play);

export const bothPlayersReady = createSelector(playState, (state) => state.leftScreen.isReady && state.rightScreen.isReady);
