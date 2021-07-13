import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './game.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { GameScreenRouterService } from './services/game-screen-router.service';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
	declarations: [GameComponent, GameScreenComponent],
	imports: [CommonModule, SharedModule, GameRoutingModule],
	providers: [GameScreenRouterService],
})
export class GameModule {}
