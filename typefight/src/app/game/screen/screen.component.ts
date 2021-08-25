import { Component, Inject } from '@angular/core';
import { SCREEN_CONFIG } from '../injection-tokens';
import { ScreenConfig } from './screen-config';
import { getScreenConfigFactory } from './screen-config-factory';

@Component({
	selector: 'app-screen',
	templateUrl: './screen.component.html',
	styleUrls: ['./screen.component.scss'],
	providers: [{ provide: SCREEN_CONFIG, useFactory: getScreenConfigFactory() }],
})
export class ScreenComponent {
	constructor(@Inject(SCREEN_CONFIG) public config: ScreenConfig) {}
}
