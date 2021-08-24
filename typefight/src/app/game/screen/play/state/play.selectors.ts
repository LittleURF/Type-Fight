import { createSelector } from '@ngrx/store';
import * as fromFeature from '../../../state.index';

export const selectPlayState = createSelector(fromFeature.selectFeatureState, (state) => state.play);
