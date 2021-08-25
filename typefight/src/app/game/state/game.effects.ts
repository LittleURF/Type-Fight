import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { State } from '../state.index';
import * as GameActions from './game.actions';
import * as GameSelectors from './game.selectors';
import * as PlaySelectors from '../screen/play/state/play.selectors';

@Injectable()
export class GameEffects {
	startWhenPlayersReady$ = createEffect(() => {
		return this.store.select(PlaySelectors.bothPlayersReady).pipe(
			filter((bothPlayersReady) => bothPlayersReady),
			map((_) => GameActions.startGame())
		);
	});

	runGameTimer$ = createEffect(
		() => {
			return this.actions$.pipe(
				ofType(GameActions.startGame),
				switchMap(() =>
					interval(1000).pipe(
						tap(() => {
							this.store.dispatch(GameActions.decrementGameTimer());
						}),
						takeUntil(this.actions$.pipe(ofType(GameActions.finishGame)))
					)
				)
			);
		},
		{
			dispatch: false,
		}
	);

	finishWhenTimerExpires$ = createEffect(() => {
		return this.store.select(GameSelectors.timer).pipe(
			filter((timer) => timer <= 0),
			map((_) => GameActions.finishGame())
		);
	});

	constructor(private actions$: Actions, private store: Store<State>) {}
}
