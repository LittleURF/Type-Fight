import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Game } from '../models/game';
import { Screen } from '../models/Screen';

@Injectable()
export class GameService {
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

	constructor() {}

	start(): void {
		this.game.start();
		this.gameSource$.next(this.game);
		this.resetReadiness();
	}

	stop(): void {}

	readyUp(screen: string) {
		if (screen === 'leftScreen') {
			this.screenLeft.isReady = true;
			this.screenLeftSource$.next(this.screenLeft);
		} else if (screen === 'rightScreen') {
			this.screenRight.isReady = true;
			this.screenRightSource$.next(this.screenRight);
		}
	}

	private resetReadiness(): void {
		this.screenLeft.isReady = false;
		this.screenLeftSource$.next(this.screenLeft);

		this.screenRight.isReady = false;
		this.screenRightSource$.next(this.screenRight);
	}
}
