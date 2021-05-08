import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameScreenRoutingModule } from './game-screen-routing.module';
import { PlayComponent } from './play/play.component';
import { HowToComponent } from './how-to/how-to.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@NgModule({
	declarations: [
    PlayComponent,
    HowToComponent,
    ScoreboardComponent
  ],
	imports: [CommonModule, GameScreenRoutingModule],
})
export class GameScreenModule {}
