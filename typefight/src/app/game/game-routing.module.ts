import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToComponent } from './game-screen/how-to/how-to.component';
import { PlayComponent } from './game-screen/play/play.component';
import { ScoreboardComponent } from './game-screen/scoreboard/scoreboard.component';
import { GameComponent } from './game.component';

enum gameScreenRoutePaths {
	scoreboard = 'scoreboard',
	howTo = 'how-to',
	play = 'play',
}

const gameScreenRoutes: Routes = [
	{ path: gameScreenRoutePaths.scoreboard, component: ScoreboardComponent },
	{ path: gameScreenRoutePaths.howTo, component: HowToComponent },
	{ path: gameScreenRoutePaths.play, component: PlayComponent },
	{ path: '', redirectTo: gameScreenRoutePaths.play },
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
				children: gameScreenRoutes,
				outlet: 'leftScreen',
			},
			{
				path: '',
				children: gameScreenRoutes,
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
