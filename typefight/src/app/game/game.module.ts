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
		RouterModule.forChild([
			{ path: '', component: GameScreensComponent },
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
		]),
	],
  providers: [
    GameScreenRouterService
  ]
})
export class GameModule {}
