import { createSelector } from '@ngrx/store';
import * as fromFeature from '../state.index';

export const game = createSelector(fromFeature.selectFeatureState, (state) => state.game);
export const timer = createSelector(game, (state) => state.timerSeconds);
