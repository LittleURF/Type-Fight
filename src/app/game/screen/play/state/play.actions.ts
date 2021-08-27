import { createAction, props } from '@ngrx/store';
import { Screens } from 'src/app/game/models/misc';
import { Word } from 'src/app/game/models/word';

export const readyUp = createAction('[Player] Ready up', props<{ whichScreen: Screens }>());
export const assignWords = createAction('[Player] Assign Words', props<{ wordsCollections: Word[][] }>());
