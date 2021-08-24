import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { overrideAndEmit } from 'src/app/core/utilities/functional';
import { Game } from '../models/game';
import { Screen } from '../models/Screen';

@Injectable()
export class GameService implements IGameConsumerService, IGameManagerService {
	private game = new Game();
	private gameSource$ = new BehaviorSubject<Game>(this.game);

	private screenLeft = new Screen();
	private screenLeftSource$ = new BehaviorSubject<Screen>(this.screenLeft);

	private screenRight = new Screen();
	private screenRightSource$ = new BehaviorSubject<Screen>(this.screenRight);

	game$ = this.gameSource$.asObservable();
	screenLeft$ = this.screenLeftSource$.asObservable();
	screenRight$ = this.screenRightSource$.asObservable();
	screens$ = combineLatest([this.screenLeft$, this.screenRight$]);

	start(): void {
		this.game = overrideAndEmit<Game>(this.game, this.gameSource$, {
			isRunning: true,
			timerSeconds: Game.timerBaseAmountSeconds,
		});
		this.runTimer();
		this.resetReadiness();
	}

	stop(): void {}

	readyUp(whichScreen: string) {
		const { screen, source } = this.getScreenSpecific(whichScreen);

		overrideAndEmit<Screen>(screen, source, { isReady: true });
	}

	private resetReadiness(): void {
		this.screenLeft = overrideAndEmit<Screen>(this.screenLeft, this.screenLeftSource$, { isReady: false });
		this.screenRight = overrideAndEmit<Screen>(this.screenRight, this.screenRightSource$, { isReady: false });
	}

	private runTimer() {
		const decrementInterval = setInterval(() => {
			if (this.game.timerSeconds === 0) {
				this.game = overrideAndEmit<Game>(this.game, this.gameSource$, { isRunning: false });
				clearInterval(decrementInterval);
			} else {
				this.game = overrideAndEmit<Game>(this.game, this.gameSource$, { timerSeconds: this.game.timerSeconds - 1 });
			}
		}, 1000);
	}

	private getScreenSpecific(whichScreen: string): { screen: Screen; source: Subject<Screen> } {
		if (whichScreen === 'leftScreen') {
			return { screen: this.screenLeft, source: this.screenLeftSource$ };
		} else if (whichScreen === 'rightScreen') {
			return { screen: this.screenRight, source: this.screenRightSource$ };
		}
	}
}

// These could be facades:) but whatever
export interface IGameManagerService {
	screens$: Observable<Screen[]>;
	start(): void;
	stop(): void;
}

export interface IGameConsumerService {
	game$: Observable<Game>;
	readyUp(whichScreen: string): void;
}
