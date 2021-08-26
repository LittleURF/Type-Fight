import { createAction, props } from '@ngrx/store';
import { Screens } from 'src/app/game/models/misc';

export const readyUp = createAction('[Player] Ready up', props<{ whichScreen: Screens }>());
