import { createAction, props } from '@ngrx/store';
import { Screens } from 'src/app/game/models/Screen';

export const readyUp = createAction('[Player] Ready up', props<{ whichScreen: Screens }>());
