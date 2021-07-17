import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToComponent } from './game-screen/how-to/how-to.component';
import { PlayComponent } from './game-screen/play/play.component';
import { ScoreboardComponent } from './game-screen/scoreboard/scoreboard.component';
import { GameComponent } from './game.component';

enum gameRoutePaths {
	scoreboard = 'scoreboard',
	howTo = 'how-to',
	play = 'play',
}

const gameRoutes: Routes = [
	{ path: gameRoutePaths.scoreboard, component: ScoreboardComponent },
	{ path: gameRoutePaths.howTo, component: HowToComponent },
	{ path: gameRoutePaths.play, component: PlayComponent },
	{ path: '', redirectTo: gameRoutePaths.play },
];

enum routePaths {
	game = 'game',
}

const routes: Routes = [
	// 'game' redirect cause of named outlets bug https://github.com/angular/angular/issues/10726
	{ path: '', redirectTo: routePaths.game },
	{
		path: routePaths.game,
		component: GameComponent,
		children: [
			{
				path: '',
				children: gameRoutes,
				outlet: 'leftScreen',
			},
			{
				path: '',
				children: gameRoutes,
				outlet: 'rightScreen',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GameRoutingModule {}
