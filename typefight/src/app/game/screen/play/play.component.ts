import { Component, Inject, OnInit } from '@angular/core';
import { SCREEN_CONFIG } from '../../injection-tokens';
import { ScreenConfig } from '../screen-config';

@Component({
	selector: 'app-play',
	templateUrl: './play.component.html',
	styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
	playButtonPositionClasses: string[] = [];

	constructor(@Inject(SCREEN_CONFIG) private config: ScreenConfig) {
		// Dont care
		this.playButtonPositionClasses.push(this.config.outletName === 'leftScreen' ? 'right-0' : 'left-0');
		this.playButtonPositionClasses.push(this.config.outletName === 'leftScreen' ? 'rounded-l-lg' : 'rounded-r-lg');
		this.playButtonPositionClasses.push(this.config.outletName === 'leftScreen' ? 'border-l-2' : 'border-r-2');
	}

	ngOnInit(): void {}
}
