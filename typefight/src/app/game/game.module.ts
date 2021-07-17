import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './game.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { GameScreenRouterService } from './services/game-screen-router.service';
import { GameRoutingModule } from './game-routing.module';
import { HowToComponent } from './game-screen/how-to/how-to.component';
import { PlayComponent } from './game-screen/play/play.component';
import { ScoreboardComponent } from './game-screen/scoreboard/scoreboard.component';

@NgModule({
	declarations: [GameComponent, GameScreenComponent, PlayComponent, HowToComponent, ScoreboardComponent],
	imports: [CommonModule, SharedModule, GameRoutingModule],
	providers: [GameScreenRouterService],
})
export class GameModule {}
