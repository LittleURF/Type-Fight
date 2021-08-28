import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './game.component';
import { ScreenComponent } from './screen/screen.component';
import { ScreenRouterService } from './services/screen-router.service';
import { GameRoutingModule } from './game-routing.module';
import { HowToComponent } from './screen/how-to/how-to.component';
import { PlayComponent } from './screen/play/play.component';
import { ScoreboardComponent } from './screen/scoreboard/scoreboard.component';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './state/game.effects';
import { StoreModule } from '@ngrx/store';
import { PlayEffects } from './screen/play/state/play.effects';
import * as fromFeature from './state.index';
import { screensConfig } from './screen/screen-config';
import { SCREENS_CONFIG } from './injection-tokens';
import { TimerComponent } from './screen/play/timer/timer.component';
import { TypingBoardComponent } from './screen/play/typing-board/typing-board.component';

@NgModule({
	declarations: [
		GameComponent,
		ScreenComponent,
		PlayComponent,
		HowToComponent,
		ScoreboardComponent,
		TimerComponent,
		TypingBoardComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		GameRoutingModule,
		StoreModule.forFeature(fromFeature.featureKey, fromFeature.reducers),
		EffectsModule.forFeature([GameEffects, PlayEffects]),
	],
	providers: [ScreenRouterService, { provide: SCREENS_CONFIG, useValue: screensConfig }],
})
export class GameModule {}
