import { createAction, props } from '@ngrx/store';

export const startGame = createAction('[Game] Start Game');
export const finishGame = createAction('[Game] Finish Game');
export const decrementGameTimer = createAction('[Game] Decrement Game Timer');
