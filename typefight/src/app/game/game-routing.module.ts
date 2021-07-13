import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game.component';

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
				loadChildren: () => import('./game-screen/game-screen.module').then((m) => m.GameScreenModule),
				outlet: 'leftScreen',
			},
			{
				path: '',
				loadChildren: () => import('./game-screen/game-screen.module').then((m) => m.GameScreenModule),
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
