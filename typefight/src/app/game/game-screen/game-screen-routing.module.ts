import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { PlayComponent } from './play/play.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToComponent } from './how-to/how-to.component';

enum routePaths {
	scoreboard = 'scoreboard',
	howTo = 'how-to',
	play = 'play',
}

const routes: Routes = [
	{ path: routePaths.scoreboard, component: ScoreboardComponent },
	{ path: routePaths.howTo, component: HowToComponent },
	{ path: routePaths.play, component: PlayComponent },
	{ path: '', redirectTo: routePaths.play },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GameScreenRoutingModule {}
