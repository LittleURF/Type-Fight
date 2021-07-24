import { Inject, Injectable } from '@angular/core';
import { SCREEN_CONFIG } from '../injection-tokens';
import { ScreenConfig } from '../screen/screen-config';

@Injectable()
export class ScreenService {
	constructor(@Inject(SCREEN_CONFIG) private config: ScreenConfig) {}
}
