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
import { GameService } from './services/game.service';
import { I_GAME_COSNUMER_SERVICE, I_GAME_MANAGER_SERVICE } from './injection-tokens';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './state/game.effects';
import { StoreModule } from '@ngrx/store';
import { PlayEffects } from './screen/play/state/play.effects';
import * as fromFeature from './state.index';

@NgModule({
	declarations: [GameComponent, ScreenComponent, PlayComponent, HowToComponent, ScoreboardComponent],
	imports: [
		CommonModule,
		SharedModule,
		GameRoutingModule,
		StoreModule.forFeature(fromFeature.featureKey, fromFeature.reducers),
		EffectsModule.forFeature([GameEffects, PlayEffects]),
	],
	providers: [
		ScreenRouterService,
		GameService,
		{ provide: I_GAME_MANAGER_SERVICE, useExisting: GameService },
		{ provide: I_GAME_COSNUMER_SERVICE, useExisting: GameService },
	],
})
export class GameModule {}
