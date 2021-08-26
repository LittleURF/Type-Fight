import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToComponent } from './screen/how-to/how-to.component';
import { PlayComponent } from './screen/play/play.component';
import { ScoreboardComponent } from './screen/scoreboard/scoreboard.component';
import { GameComponent } from './game.component';

enum screenRoutePaths {
	scoreboard = 'scoreboard',
	howTo = 'how-to',
	play = 'play',
}

const screenRoutes: Routes = [
	{ path: screenRoutePaths.scoreboard, component: ScoreboardComponent },
	{ path: screenRoutePaths.howTo, component: HowToComponent },
	{ path: screenRoutePaths.play, component: PlayComponent },
	{ path: '', redirectTo: screenRoutePaths.play },
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
				children: screenRoutes,
				outlet: 'leftScreen',
			},
			{
				path: '',
				children: screenRoutes,
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
