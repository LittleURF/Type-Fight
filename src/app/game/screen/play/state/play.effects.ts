import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map } from 'rxjs/operators';

import * as PlayActions from './play.actions';
import * as GameActions from '../../../state/game.actions';
import { Word } from 'src/app/game/models/word';
import * as randomWords from 'random-words';

@Injectable()
export class PlayEffects {
	generateWords$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(GameActions.startGame),
			map(() => {
				const wordsCollections = [randomWords({ exactly: 500 }), randomWords({ exactly: 500 })].map((wordsCollection) =>
					wordsCollection.map((word) => new Word(word))
				);

				return PlayActions.assignWords({ wordsCollections: wordsCollections });
			})
		);
	});

	constructor(private actions$: Actions) {}
}
