import { createAction, props } from '@ngrx/store';
import { Screens } from 'src/app/game/models/misc';
import { ToType } from 'src/app/game/models/to-type';

export const readyUp = createAction('[Player] Ready up', props<{ whichScreen: Screens }>());
export const assignToTypeData = createAction('[Player] Assign To Types Data', props<{ toTypeData: ToType<any>[][] }>());
