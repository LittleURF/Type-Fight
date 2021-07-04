import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameScreensComponent } from './game-screens.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { RouterModule } from '@angular/router';
import { GameScreenRouterService } from './services/game-screen-router.service';

@NgModule({
	declarations: [GameScreensComponent, GameScreenComponent],
	imports: [
		CommonModule,
		// 'game' redirect cause of named outlets bug https://github.com/angular/angular/issues/10726
		RouterModule.forChild([
			{ path: '', redirectTo: 'game' },
			{
				path: 'game',
				component: GameScreensComponent,
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
		]),
	],
	providers: [GameScreenRouterService],
})
export class GameModule {}
