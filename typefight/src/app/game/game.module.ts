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

@NgModule({
	declarations: [GameComponent, ScreenComponent, PlayComponent, HowToComponent, ScoreboardComponent],
	imports: [CommonModule, SharedModule, GameRoutingModule],
	providers: [ScreenRouterService, GameService],
})
export class GameModule {}
