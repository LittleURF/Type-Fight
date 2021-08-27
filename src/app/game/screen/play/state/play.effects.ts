import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map } from 'rxjs/operators';

import * as PlayActions from './play.actions';
import * as GameActions from '../../../state/game.actions';
import { Word, Number } from 'src/app/game/models/to-type';
import * as randomWords from 'random-words';
import { ScreenConfig } from '../../screen-config';
import { GameType } from 'src/app/game/models/misc';
import { SCREENS_CONFIG } from 'src/app/game/injection-tokens';

@Injectable()
export class PlayEffects {
	generateToType$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(GameActions.startGame),
			map(() => {
				const toTypeData = [];

				this.screensConfig.forEach((config) => {
					switch (config.gameType) {
						case GameType.Words:
							toTypeData.push(this.generateRandomWords(500));
							break;
						case GameType.Numbers:
							toTypeData.push(this.generateRandomNumbers(500));
							break;
					}
				});

				return PlayActions.assignToTypeData({ toTypeData: toTypeData });
			})
		);
	});

	constructor(private actions$: Actions, @Inject(SCREENS_CONFIG) private screensConfig: ScreenConfig[]) {}

	private generateRandomWords = (count: number): Word[] => {
		return randomWords({ exactly: count }).map((word) => new Word(word));
	};

	private generateRandomNumbers = (count: number): Number[] => {
		const numbers = [];
		for (let i = 0; i < count; i++) {
			numbers.push(Math.floor(Math.random() * 1000000));
		}
		return numbers.map((number) => new Number(number));
	};
}
